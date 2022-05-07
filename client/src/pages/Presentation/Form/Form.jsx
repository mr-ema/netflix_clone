import { StartBtn } from "../../../components/index"
import { useForm } from "react-hook-form"

const Form = () => {
  const {register, handleSubmit, formState: { errors }} = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form className="email" onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="email" />
    <div className="alias-mz">
      <input type="email" placeholder="email" id="email" {...register("email", {required:true})}/>
      {errors.email && <span>El email es obligatorio.</span>}
    </div>
    <StartBtn />
  </form>
  )
}

export default Form