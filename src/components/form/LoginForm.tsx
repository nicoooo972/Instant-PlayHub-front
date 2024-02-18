import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"

const formSchema = z.object({
    email: z.string().min(1, {
        message: "L'e-mail est obligatoire.",
    }).email({
        message: "L'e-mail doit être valide.",
    }),
    password: z.string().min(1, {
        message: "Le mot de passe est obligatoire.",
    })
})

export default function LoginForm() {
    const navigate = useNavigate();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                navigate("/");
            } else {
                const errorData = await response.json();
                console.error("Erreur lors de le la connexion :", errorData);
            }
        } catch (error) {
            console.error("Erreur lors de la requête de connexion :", error);
        }
    }

    return (
        <div className="bg-black h-screen flex flex-col justify-center items-center">
            <div className="bg-gray rounded-md p-6 min-w-96">

                <h1 className="text-2xl text-purple text-center mb-5">
                    Connexion
                </h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <Button className="w-full" type="submit">Se connecter</Button>
                        <FormDescription className="text-white text-center flex justify-between">
                            <span><Link className="underline" to={"/inscription"}>Je n'ai pas de compte </Link></span>
                            <span><Link className="underline" to={"/connexion"}>Mot de passe oublié</Link></span>
                        </FormDescription>
                    </form>
                </Form>
            </div>
        </div>
    )
}