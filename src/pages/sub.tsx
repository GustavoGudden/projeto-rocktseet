import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";

const CREATE_SUB = gql`
  mutation CreateSub($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) 
  }
`;

export function Sub() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [createSubscriber] = useMutation(CREATE_SUB);

  function handleSub(event: FormEvent) {
    event.preventDefault();
    console.log(name, email);
    createSubscriber({
      variables: {
        name,
        email,
      },
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className=" w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto  ">
        <div className="max-w-[640px]">
          <h1>ignite lab</h1>
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            construa sua <strong className="text-blue-500">aplicaçao</strong>
            completa do zero com{" "}
            <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded ">
          <strong className="text-2xl mb-6 block">
            inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSub} className="flex flex-col gap-2 w-full ">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="seu nome completo"
              onChange={(event) => setname(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu email"
              onChange={(event) => setemail(event.target.value)}
            />
            <button
              className="mt-4 bg-green-500  uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
