import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useLoginStore } from "../../store/loginStore";
import axiosInstance from "../../apis/axiosInstance";
import NoticeModal from "../../components/NoticeModal";
import { InputWithLabel } from "../../components/InputWithLabel";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

export default function NewPasswordPage() {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

  const navigate = useNavigate();
  const {
    password,
    isPasswordValid,
    passwordConfirm,
    isPasswordConfirmValid,
    setPassword,
    setPasswordConfirm,
    setIsPasswordValid,
    setIsPasswordConfirmValid,
  } = useLoginStore();
  const logout = useLoginStore((state) => state.logout);

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!passwordRegex.test(password) || password !== passwordConfirm) {
        setIsPasswordValid(false);
        setIsPasswordConfirmValid(false);
        setIsOpen(true);
        return;
      }
      await axiosInstance.put("/settings/update-password", {
        password: password,
      });
      logout();
      // tokenService.clearAll();
      navigate(`/login`);
    } catch (error) {
      console.error(error);
    } finally {
      setPassword("");
      setPasswordConfirm("");
    }
  };

  return (
    <>
      {isOpen && (
        <NoticeModal onClose={() => setIsOpen(false)} title="알림">
          <p>비밀번호가 다릅니다.</p>
          <p>다시 입력해주세요.</p>
        </NoticeModal>
      )}
      <form onSubmit={handleSubmit}>
        <Logo>
          <p>본인 인증이 완료되었습니다.</p>
          <p>새로운 비밀번호를 설정해주세요.</p>
        </Logo>
        <div className="flex flex-col gap-[12px]">
          <InputWithLabel
            label="새 비밀번호"
            type="password"
            value={password}
            handleChange={setPassword}
            placeholder="새 비밀번호"
            error="비밀번호 형식"
            isValid={isPasswordValid}
          />

          <InputWithLabel
            label="새 비밀번호 확인"
            type="password"
            value={passwordConfirm}
            handleChange={setPasswordConfirm}
            placeholder="새 비밀번호 확인"
            error="비밀번호 형식"
            isValid={isPasswordConfirmValid}
          />

          <Button className=" bg-primary text-[#ffffff]  w-full  h-[47px] py-[13px] px-[21px] text-[12px] rounded-[6px] mt-[20px]">
            확인
          </Button>
          <Link to="/signup" className="text-center mt-[16px]  text-[#475569] underline">
            회원가입 바로가기
          </Link>
        </div>
      </form>
    </>
  );
}
