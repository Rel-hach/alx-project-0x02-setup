// pages/home.tsx
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handlePostSubmit = (newPost: { title: string; content: string }) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-6"
          >
            Add New Post
          </button>
          <PostModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handlePostSubmit}
          />
          <div className="space-y-4">
            {posts.map((post, index) => (
              <Card
                key={index}
                title={post.title}
                content={post.content}
                className="bg-white"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}