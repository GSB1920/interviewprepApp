export interface Topic {
  id: number;
  title: string;
  progress: number;
  totalQuestions: number;
  completed: number;
  subgroups: Subgroup[];
}

export interface Subgroup {
  id: number;
  title: string;
  topicId: number;
  progress: number;
  totalQuestions: number;
  completed: number;
  questions: Question[];
}

export interface Question {
  id: number;
  title: string;
  content: string;
  answer: string;
  tags: string[];
  lastReviewed?: string;
  reviewedCount: number;
  mastered: boolean;
  subgroupId: number;
}