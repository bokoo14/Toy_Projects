import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommetListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
      {/* comment객체가 모인 comments라는 배열의 map()함수를 활용하여 각각의 댓글 객체들을 
      CommentListItem 컴포넌트로 넘겨 화면에 댓글 목록을 표시함 */}
    </Wrapper>
  );
}

export default CommentList;
