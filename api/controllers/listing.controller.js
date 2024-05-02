import Listing from "../models/listing.model.js"

export const createListing = async(req,res,next)=>{
try {
    const listing = await Listing.create(req.body)
    return res.status(201).json(listing)
} catch (error) {
    next(error)
}
}

export const getListing = async (req, res, next) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
      }
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  };