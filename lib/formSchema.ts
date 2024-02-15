import { z } from "zod"
 
export const formSchema = z.object({
  username: z.string().min(2,{message:"ユーザー名は2文字以上で入力してください。"}).max(50),
  subject:z.string().min(2,{message:"2文字以上でお願いします。"}),
  email:z.string().email({message:"適切なメールアドレスを入力してください"}),
  content:z.string().min(10,{message:"本文は10文字以上で入力してください"})
  .max(160,{message:"本文は160文字以内で入力してください",}),
})