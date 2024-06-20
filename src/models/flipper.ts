import { Schema, Types, model } from "mongoose";

interface ICarasteristics {
  release_date: string;
  grade: number;
}

interface IFlipper {
  name: string;
  price: number;
  state: string;
  make: Types.ObjectId;
  caracteristics: ICarasteristics;
  front_image: string;
  back_image: string;
  side_image: string;
}

const flipperSchema = new Schema<IFlipper>({
  name: { type: String, required: true, lowercase: true, trim: true },
  price: { type: Number, required: true },
  state: { type: String, required: true },
  make: { type: Schema.Types.ObjectId, ref: "Make", required: true },
  caracteristics: {
    release_date: { type: String, required: true },
    grade: { type: Number, required: true },
  },
  front_image: { type: String, required: true },
  back_image: { type: String, required: true },
  side_image: { type: String, required: true },
});

const Flipper = model<IFlipper>("Flippers", flipperSchema);
export { Flipper };
