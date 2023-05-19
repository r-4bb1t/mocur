import { GoogleIcon } from "../Icons";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const Auth = ({ close }: { close: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  return (
    <div className="card-body">
      <button
        type="button"
        className="auth-button  font-bold flex items-center justify-between"
        onClick={() =>
          signIn("google").then((res) => {
            if (res?.ok) {
              close();
            } else {
              setError("dd");
            }
          })
        }
      >
        <GoogleIcon /> 구글 계정으로 가입 및 로그인
      </button>
    </div>
  );
};
