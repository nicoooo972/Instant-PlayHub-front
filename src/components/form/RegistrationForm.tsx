import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosError } from 'axios';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
    username: z.string().min(1, {
        message: "Le pseudo est obligatoire.",
    }).min(4, {
        message: "Le pseudo doit comporter au moins 4 caractères.",
    }),
    email: z.string().min(1, {
        message: "L'e-mail est obligatoire.",
    }).email({
        message: "L'e-mail doit être valide.",
    }),
    password: z.string().min(1, {
        message: "Le mot de passe est obligatoire.",
    }).refine(value => {
        // Règles du mot de passe : au moins 8 caractères, une majuscule, un chiffre et un caractère spécial
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
        return passwordRegex.test(value);
    }, {
        message: "Le mot de passe doit avoir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.",
    }),
})

export const RegistrationForm = () => {
    const {
        setError
    } = useForm();
    const navigate = useNavigate();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, values);

            if (response.status === 200) {
                navigate("/login");
            } else {
                console.error("Erreur lors de l'inscription :", response.data);
            }
        } catch (err) {
            console.log("oci")
            if (err instanceof AxiosError){
                console.error("Erreur lors de la requête d'inscription :", err);
                console.log("ici    ")
                if (err.response?.data?.error_email) {
                    console.log('icic');
                    const errorMessage = err.response.data.error_email as string;
                    console.log(errorMessage)
                    form.setError('email', { type: 'server', message: errorMessage });
                }
            }
            
        }
    }

    return (
        <div className="bg-black h-screen flex flex-col justify-center items-center">
            <div className="bg-gray rounded-md p-6 w-96">

                <h1 className="text-2xl text-purple text-center mb-5">
                    Inscription
                </h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Pseudo *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="MonSuperbePseudo" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Email *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="examle@gmail.com" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Mot de passe *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="********" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" type="submit">S'inscrire</Button>
                        <FormDescription className="text-white text-center">
                            Je suis déjà inscrit ? <Link className="underline" to={"/login"}>Je me connecte</Link>
                        </FormDescription>
                    </form>
                </Form>
            </div>
        </div>
    )
}
