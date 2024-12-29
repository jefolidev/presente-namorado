import { useNavigate } from 'react-router'

export function GreetingsPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen px-20 gap-12">
      <h2 className="text-center">
        Obrigado por ter visto tudo, espero que você tenha gostado meu amor, eu
        te amo demais demais mesmo vida, que 2025 seja mais um dos anos que a
        gente vai estar juntinhos. Eu amo muito você e te quero pra sempre,
        feliz natal e feliz ano novo vidoca. 💖💗💖💕❣
      </h2>

      <button
        className="bg-stone-900 text-white font-bold font-inter rounded-full px-8 py-2 hover:brightness-75"
        onClick={() => navigate('/welcome')}
      >
        Voltar para o início
      </button>
    </div>
  )
}
