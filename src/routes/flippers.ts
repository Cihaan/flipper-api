import { Hono } from "hono";
import { isValidObjectId } from "mongoose";
import { Flipper } from "../models/flipper";

const api = new Hono().basePath("/flippers");

/**
 * Find all
 */
api.get("/", async (c) => {
  try {
    const response = await Flipper.find({}, null, {
      populate: "make",
    });
    return c.json(response);
  } catch (error: any) {
    return c.json(error._message, 400);
  }
});

/**
 * Find one
 */
api.get("/:creaId", async (c) => {
  try {
    const _id = c.req.param("creaId");

    if (isValidObjectId(_id)) {
      const oneCrea = await Flipper.findOne({ _id }, null, {
        populate: "make",
      });
      return c.json(oneCrea);
    }

    return c.json({ msg: "ObjectId malformed" }, 400);
  } catch (error: any) {
    return c.json(error._message, 400);
  }
});

/**
 * Create one
 */
api.post("/", async (c) => {
  const body = await c.req.json();
  try {
    const newCrea = new Flipper(body);
    const saveCrea = await newCrea.save();
    return c.json(saveCrea, 201);
  } catch (error: any) {
    return c.json(error._message, 400);
  }
});

/**
 * Update one
 */
api.put("/:creaId", async (c) => {
  try {
    const _id = c.req.param("creaId");
    const body = await c.req.json();
    const q = {
      _id,
    };

    const updateQuery = {
      ...body,
    };

    const tryToUpdate = await Flipper.findOneAndUpdate(q, updateQuery, { new: true });
    return c.json(tryToUpdate, 200);
  } catch (error: any) {
    return c.json(error._message, 400);
  }
});

/**
 * Patch one
 */
api.patch("/:creaId", async (c) => {
  try {
    const _id = c.req.param("creaId");
    const body = await c.req.json();
    const q = {
      _id,
    };

    const updateQuery = {
      $set: { ...body },
    };
    const tryToUpdate = await Flipper.findOneAndUpdate(q, updateQuery, { new: true });
    return c.json(tryToUpdate, 200);
  } catch (error: any) {
    return c.json(error._message, 400);
  }
});

/**
 * Delete one
 */
api.delete("/:creaId", async (c) => {
  try {
    const _id = c.req.param("creaId");
    const tryToDelete = await Flipper.deleteOne({ _id });
    const { deletedCount } = tryToDelete;

    if (deletedCount) {
      return c.json({ msg: "DELETE done" });
    }

    return c.json({ msg: "not found" }, 404);
  } catch (error: any) {
    return c.json(error._message, 400);
  }
});

export default api;
