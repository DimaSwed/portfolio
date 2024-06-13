'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/prisma'

export async function addComment(form: FormData) {
  const title = form.get('title')?.toString()
  const content = form.get('content')?.toString()
  const initials = form.get('initials')?.toString()

  await prisma.comment.create({
    data: { title: title as string, content: content as string, initials: initials as string }
  })

  revalidatePath('/')
}
