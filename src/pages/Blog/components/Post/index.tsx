import { IPost } from "../..";
import { relativeDateFomatter } from "../../../../utils/fomatter";
import { PostContainer } from "./styles";

interface PostProps{
  post: IPost;
}

export function Post({post}: PostProps){
  const formattedDate = relativeDateFomatter(post.created_at)
  return(
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>
        {post.body}
      </p>
    </PostContainer>
  )
}