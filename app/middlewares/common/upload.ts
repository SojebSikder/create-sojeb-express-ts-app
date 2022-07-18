import { Uploader } from "../../../system/src/core/Disk";

type fields = {
  /**
   * field name
   */
  name: string;
  /**
   * max upload file number
   */
  maxCount: number;
};

type attachmentOption = {
  /**
   * field name
   */
  fieldname: fields[];
  /**
   * distination path
   */
  distination: string;
};
export function attachmentUpload(attachmentOption: attachmentOption) {
  return function (req, res, next) {
    const upload = Uploader.upload(
      attachmentOption.distination,
      ["image/jpeg", "image/jpg", "image/png"],
      1000000,
      2,
      "Only .jpg, jpeg or .png format allowed!"
    );

    // call the middleware function
    upload.fields(attachmentOption.fieldname)(req, res, (err) => {
      if (err) {
        res.status(500).json({
          message: err.message,
        });
      } else {
        next();
      }
    });
  };
}
