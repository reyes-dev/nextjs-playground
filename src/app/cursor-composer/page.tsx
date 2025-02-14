"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

function useTabNavigation() {
  const [activeTab, setActiveTab] = useState("cursor");

  const tabs = useMemo(
    () => [
      { id: "cursor", label: "Cursor", color: "blue" },
      { id: "learning", label: "Learning", color: "green" },
      { id: "ai-tools", label: "AI Tools", color: "purple" },
      { id: "community", label: "Community", color: "orange" },
      { id: "ai-learning", label: "AI Learning", color: "pink" },
    ],
    []
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        e.preventDefault();
        const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
        let newIndex;

        if (e.key === "ArrowLeft") {
          newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
        } else {
          newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
        }

        setActiveTab(tabs[newIndex].id);
      }
    },
    [activeTab, tabs]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return {
    activeTab,
    setActiveTab,
    tabs,
  };
}

export default function CursorComposerPage() {
  const { activeTab, setActiveTab, tabs } = useTabNavigation();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        Cursor & AI Programming Resources
      </h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 bg-gray-800 p-2 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all duration-200
              shadow-lg transform hover:scale-105
              ${
                activeTab === tab.id
                  ? `bg-${tab.color}-600 text-white ring-2 ring-${tab.color}-400 ring-offset-2 ring-offset-gray-800`
                  : `bg-gray-700 text-${tab.color}-300 hover:bg-gray-600`
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === "cursor" && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">
              Official Cursor Resources
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://cursor.sh"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Cursor Official Website
                </a>
              </li>
              <li>
                <a
                  href="https://cursor.sh/docs"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Cursor Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://cursor.sh/blog"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Cursor Blog
                </a>
              </li>
            </ul>
          </section>
        )}

        {activeTab === "learning" && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">
              Learning Resources
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=3EqQMg7rN2c"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Getting Started with Cursor (Video Tutorial)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/getcursor/cursor"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Cursor GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://www.coursera.org/learn/ai-for-everyone"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  AI For Everyone (Coursera)
                </a>
              </li>
              <li>
                <a
                  href="https://www.deeplearning.ai/"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  DeepLearning.AI Courses
                </a>
              </li>
            </ul>
          </section>
        )}

        {activeTab === "ai-tools" && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-500">
              Related AI Programming Tools
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/features/copilot"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  GitHub Copilot
                </a>
              </li>
              <li>
                <a
                  href="https://www.anthropic.com/claude"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Claude by Anthropic
                </a>
              </li>
              <li>
                <a
                  href="https://platform.openai.com/docs/guides/gpt"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  OpenAI GPT API Documentation
                </a>
              </li>
            </ul>
          </section>
        )}

        {activeTab === "community" && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">
              Community & Support
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://discord.gg/cursor"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Cursor Discord Community
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/cursor_sh"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Cursor Twitter
                </a>
              </li>
            </ul>
          </section>
        )}

        {activeTab === "ai-learning" && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-pink-500">
              AI Learning & Prompt Engineering
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.promptingguide.ai/"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Prompt Engineering Guide
                </a>
              </li>
              <li>
                <a
                  href="https://learnprompting.org/"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Learn Prompting
                </a>
              </li>
              <li>
                <a
                  href="https://platform.openai.com/docs/guides/prompt-engineering"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  OpenAI Prompt Engineering Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ChatGPT Prompt Engineering for Developers
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dair-ai/Prompt-Engineering-Guide"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  DAIR AI Prompt Engineering Resources
                </a>
              </li>
              <li>
                <a
                  href="https://www.anthropic.com/index/constitutional-ai-the-next-step"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Understanding AI Capabilities & Limitations
                </a>
              </li>
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
