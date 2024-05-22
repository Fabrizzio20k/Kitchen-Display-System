import styled from 'styled-components';
import { FaCirclePlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Button = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 10;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background-color: #a3b9ff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #5b71bd;
  }
`;

const ButtonText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001045;
`;

export default function ButtonGoBack() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/")}>
      <ButtonWrapper>
        <ButtonText>Go Back</ButtonText>
        <FaCirclePlus size={30} className='text-blue-950' />
      </ButtonWrapper>
    </Button>
  )
}
