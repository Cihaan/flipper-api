import { Schema, model } from "mongoose";

interface IMake {
  name: string;
  description: string;
  logo_url: string;
  guide_url: string;
}

const makeSchema = new Schema<IMake>({
  name: { type: String, required: true, lowercase: true, trim: true },
  description: { type: String, required: true },
  logo_url: { type: String, required: true },
  guide_url: { type: String, required: true },
});

const Make = model<IMake>("Make", makeSchema);
export { Make };
