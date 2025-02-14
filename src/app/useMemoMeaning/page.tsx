"use client";

import { useState, useMemo } from "react";

function ExpensiveCalculation({ number }: { number: number }) {
  // Simulate expensive computation
  const calculateFactorial = (n: number): number => {
    console.log("Calculating factorial..."); // To demonstrate when calculation occurs
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  // Without useMemo - recalculates on every render
  const factorialWithoutMemo = calculateFactorial(number);

  // With useMemo - only recalculates when number changes
  const factorialWithMemo = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div className="space-y-4 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-semibold text-white">Factorial Calculator</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-red-900/30 rounded-lg">
          <p className="text-red-400 font-medium">Without useMemo:</p>
          <p className="text-2xl text-white">{factorialWithoutMemo}</p>
        </div>
        <div className="p-4 bg-green-900/30 rounded-lg">
          <p className="text-green-400 font-medium">With useMemo:</p>
          <p className="text-2xl text-white">{factorialWithMemo}</p>
        </div>
      </div>
    </div>
  );
}

export default function UseMemoExplanation() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto space-y-8">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Understanding useMemo in React</h1>
        <p className="text-lg text-gray-300">
          useMemo is a React Hook that lets you cache the result of a
          calculation between re-renders. It&apos;s particularly useful for
          expensive calculations or when you need to ensure referential
          equality.
        </p>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prevents expensive recalculations on every render</li>
            <li>
              Maintains referential equality for optimized child components
            </li>
            <li>Improves application performance in specific scenarios</li>
          </ul>
        </div>

        <div className="bg-blue-900/30 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-300">
            Interactive Demo
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <label className="text-white">
                Input Number:
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                  className="ml-2 p-2 rounded bg-gray-700 text-white"
                  min="0"
                  max="10"
                />
              </label>
              <button
                onClick={() => setCount((c) => c + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Force Re-render (Count: {count})
              </button>
            </div>

            <ExpensiveCalculation number={number} />

            <div className="text-sm text-gray-400">
              <p>Try these steps:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>
                  Change the input number and watch both calculations update
                </li>
                <li>
                  Click &quot;Force Re-render&quot; and notice only the
                  non-memoized calculation runs
                </li>
                <li>Open the console to see when calculations occur</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold">Resources</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://react.dev/reference/react/useMemo"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
              >
                <span>📚</span> Official React useMemo Documentation
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/learn/skipping-expensive-recalculations"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
              >
                <span>🎓</span> React Guide: Skipping Expensive Recalculations
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/learn/render-and-commit"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
              >
                <span>🔄</span> Understanding React&apos;s Rendering Process
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-purple-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Historical Context</h2>
          <p className="text-gray-300">
            useMemo was introduced in React 16.8 alongside other Hooks in
            February 2019. It was created to solve performance optimization
            challenges that were previously handled through class component
            lifecycle methods like shouldComponentUpdate. The Hook provides a
            more elegant way to handle expensive calculations and referential
            equality in functional components.
          </p>
        </div>
      </section>
    </main>
  );
}
