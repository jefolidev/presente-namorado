import edit from '../../assets/edit.mp4'
import { Button } from '../../components/button/index.tsx'

export function EditPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-20 gap-12">
      <h2>Por que não lembrar dessa edit maravilhosa com essa música?</h2>
      <iframe src={edit} className="h-[25rem] w-[45rem]"></iframe>
      <Button path="/music/congratulation" />
    </div>
  )
}
