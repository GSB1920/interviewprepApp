import { Topic } from '@/types';

export const mockTopics: Topic[] = [
  {
    id: 1,
    title: 'JavaScript',
    progress: 75,
    totalQuestions: 20,
    completed: 15,
    subgroups: [
      {
        id: 1,
        title: 'Advanced Topics',
        topicId: 1,
        progress: 60,
        totalQuestions: 5,
        completed: 3,
        questions: [
          {
            id: 1,
            title: 'What are JavaScript Closures?',
            content: 'Explain closures with practical examples and common use cases...',
            answer: `A **closure** is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned...`,
            tags: ['functions', 'scope', 'advanced'],
            lastReviewed: '3 days ago',
            reviewedCount: 5,
            mastered: false,
            subgroupId: 1
          },
          {
            id: 2,
            title: 'Explain Event Bubbling and Capturing',
            content: 'Describe event propagation in the DOM...',
            answer: 'Event bubbling and capturing are two ways of event propagation in the DOM...',
            tags: ['events', 'dom'],
            reviewedCount: 3,
            mastered: true,
            subgroupId: 1
          }
        ]
      },
      {
        id: 2,
        title: 'ES6+ Features',
        topicId: 1,
        progress: 80,
        totalQuestions: 10,
        completed: 8,
        questions: [
          {
            id: 3,
            title: 'What are Arrow Functions?',
            content: 'Explain arrow functions and their differences from regular functions...',
            answer: 'Arrow functions are a concise way to write functions in ES6...',
            tags: ['es6', 'functions'],
            reviewedCount: 7,
            mastered: true,
            subgroupId: 2
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'React',
    progress: 50,
    totalQuestions: 15,
    completed: 7,
    subgroups: [
      {
        id: 3,
        title: 'Hooks',
        topicId: 2,
        progress: 40,
        totalQuestions: 8,
        completed: 3,
        questions: [
          {
            id: 4,
            title: 'What is the useEffect hook?',
            content: 'Explain the useEffect hook and its dependencies...',
            answer: 'The useEffect hook lets you perform side effects in function components...',
            tags: ['hooks', 'effects'],
            reviewedCount: 4,
            mastered: false,
            subgroupId: 3
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Python',
    progress: 30,
    totalQuestions: 12,
    completed: 4,
    subgroups: []
  },
  {
    id: 4,
    title: 'System Design',
    progress: 20,
    totalQuestions: 8,
    completed: 2,
    subgroups: []
  }
];