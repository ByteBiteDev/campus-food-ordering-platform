import { z } from "zod";

export const UploadSchema = z.object({
  filename: z.string().min(1),
  mimetype: z.string().min(1),
  size: z.number().positive(),
  url: z.string().url()
});

export const CreateUploadSchema = z.object({
  file: z.any()
});
