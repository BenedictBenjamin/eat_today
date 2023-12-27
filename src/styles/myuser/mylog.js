import styled from "@emotion/styled";

export const Wraps = styled.div`
  position: fixed;
  width: 320px;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffebd0;
  img {
    width: 100px;
    height: 100px;
  }
  input {
    border: none;
    padding: 7px;
    border-radius: 30px;
  }
`;

export const LogBoxs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  padding-top: 100%;
  width: 300px;
  /* background-color: hotpink; */
  /* height: 100px; */
`;
export const LogBox = styled.div`
  width: 320px;
  /* height: 30px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
  /* background-color: yellow; */
  margin-top: 20px;
  gap: 5px;
  .user {
    padding: 10px;
  }
  .id,
  .pw {
    border: none;
    padding: 7px;
    border-radius: 30px;
  }
`;
export const Name = styled.div`
  display: flex;
`;
export const ButtonLog = styled.button`
  margin: 15px;
  color: #fff;
  border: 1px solid;
  border-radius: 15px;
  background-color: #8a6c6c;
  padding: 9px;
  padding-left: 26px;
  padding-right: 26px;
  border-color: #8a6c6c;
  border-width: 4px;
  font-family: "KingSejongInstitute";
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;