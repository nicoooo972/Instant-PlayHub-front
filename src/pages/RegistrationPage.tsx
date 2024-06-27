import { RegistrationForm } from "@/components/form/RegistrationForm"

export function RegistrationPage() {
    return (
        <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
            <div className="hidden bg-muted lg:block">
                {/* <img
                    src="/placeholder.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                /> */}
                <div className="bg-primary h-full w-full">

                </div>
            </div>
            <div className="flex items-center justify-center py-12 px-4 sm:px-0">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your information to create an account
                        </p>
                    </div>
                    <RegistrationForm />
                </div>
            </div>
        </div>
    )
}