import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer, HeroContainer, BlogContainer } from "./styles"; 

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  comments: number;
  html_url: string;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`
      );
      setPosts(response.data.items);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, []); 


  useEffect(() => {
    getPosts();
  }, [getPosts]); 

  return (
    <>
     <BlogContainer>
     <HeroContainer>
        <h1>Github Blog</h1>
        <p>
        Hey there! I'm Layla, a passionate front-end developer with a love for creating innovative and user-friendly web and mobile applications. With a background in English Literature and currently pursuing a degree in Systems Analysis and Development, I bring a unique blend of creativity and technical expertise to my projects. My goal is to leverage software development with AI integration to deliver modern and impactful solutions.
        </p>
      </HeroContainer>

    
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostListContainer>
      )}
       {/* Perfil */}
       <Profile />
       </BlogContainer>
    </>
  );
}