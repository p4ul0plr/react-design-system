import { Logo } from "../Logo";
import { FormEvent, useState } from "react";
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Textinput } from "../components/Textinput";
import { Text } from "../components/Text";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  function handleSignIn(event: FormEvent) {
    event.preventDefault();
    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça Login e cemece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>Login Realizado!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <Textinput.Root>
            <Textinput.Icon>
              <Envelope />
            </Textinput.Icon>
            <Textinput.Input id="email" placeholder="Digite seu e-mail" />
          </Textinput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <Textinput.Root>
            <Textinput.Icon>
              <Lock />
            </Textinput.Icon>
            <Textinput.Input id="password" placeholder="********" />
          </Textinput.Root>
        </label>

        <label htmlFor="remember" className="flex item-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200 ">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora
          </a>
        </Text>
      </footer>
    </div>
  );
}
