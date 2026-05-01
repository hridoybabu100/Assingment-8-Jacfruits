"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;
    // console.log(name, email, image, password);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error("Login Faild");
    }
    if (data) {
      toast.success("Login sucssfull");
    }
    // console.log(data,error);
  };
  const googleOnClick = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="my-10 max-w-[96%] lg:max-w-[80%] mx-auto">
      <Card className="shadow bg-zinc-300 w-100 mx-auto py-10">
        <h1 className="text-center text-2xl font-bold">Sign In</h1>
        <div className="">
          <Form onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label>Email</Label>
              <Input className="w-full" placeholder="Enter Your email" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label>Password</Label>
              <Input className="w-full" placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <Button type="submit">Submit</Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
            <p className="text-center">Or</p>
          </Form>
        </div>

        <button
          onClick={googleOnClick}
          className="btn w-full rounded-sm bg-primary text-white"
        >
          <GrGoogle></GrGoogle> Sing in with Goggole
        </button>
      </Card>
    </div>
  );
}
