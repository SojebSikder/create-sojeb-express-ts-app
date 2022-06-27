import nodemailer from "nodemailer";
import { mailConfig } from "../../../config/mail";

/**
 * Mail abstraction top of nodemailer. Using Mail class Send email
 * @class Mail
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 * @example
 * const mail = Mail.to("example@email.com")
 *  .subject("My subject")
 *  .body("My body")
 *  .send();
 */
export class Mail {
  private static host = mailConfig.mailers.smtp.host;
  private static port = mailConfig.mailers.smtp.port;
  private static user = mailConfig.mailers.smtp.username;

  private static accessToken = mailConfig.mailers.smtp.accessToken;
  private static clientId = mailConfig.mailers.smtp.clientId;
  private static clientSecret = mailConfig.mailers.smtp.clientSecret;

  // mail options
  private static from = mailConfig.from.address;
  // to: recepient
  private static recepient = "";
  // subject
  private static subjectText = "";
  // body
  private static bodyText = "";

  /**
   * Mail recepient
   * @param recepient
   */
  public static to(recepient: string) {
    this.recepient = recepient;
    return this;
  }
  /**
   * mail subject
   * @param subjectText
   */
  public static subject(subjectText: string) {
    this.subjectText = subjectText;
    return this;
  }
  /**
   * mail body
   * @param bodyText
   */
  public static body(bodyText: string) {
    this.bodyText = bodyText;
    return this;
  }
  /**
   * set credentials for sending email
   */
  public static setCredentials({ accessToken }) {
    this.accessToken = accessToken;
    return this;
  }
  /**
   * send mail
   */
  public static send(html = false) {
    try {
      let transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        host: this.host,
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: this.user,
          accessToken: this.accessToken,
          clientId: this.clientId,
          clientSecret: this.clientSecret,
        },
      });

      let mailOptions;

      if (html == true) {
        mailOptions = {
          from: this.from,
          to: this.recepient,
          subject: this.subjectText,
          html: this.bodyText,
        };
      } else {
        mailOptions = {
          from: this.from,
          to: this.recepient,
          subject: this.subjectText,
          text: this.bodyText,
        };
      }

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return error;
        } else {
          return true;
        }
      });
    } catch (error) {
      return error;
    }
  }
}
