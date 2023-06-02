import jwt from "jsonwebtoken";
import {createError} from "../util/error.js"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return next(createError(401, "You are not authenticated!"));
    }
  
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) return next(createError(403, "Token is not valid!"));
      else {
        req.user = user;
        next(); 
      }
    });
  };

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  const user = jwt.verify(token, process.env.JWT);
  console.log(user)
      if (user.id === req.params.id || user.isAdmin) {
        console.log("ola")
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
  };
  
export const verifyAdmin = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  const user = jwt.verify(token, process.env.JWT);
  if(user.isAdmin === true) {
    console.log("ok");
    next();
  }  else {
    return next(createError(403, "You are not admin!"));
  }
}