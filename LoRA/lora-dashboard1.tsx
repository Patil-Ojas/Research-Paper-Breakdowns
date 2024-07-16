import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, Zap, PieChart, Database, BookOpen, Lightbulb, Code } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('introduction');

  const parameterComparisonData = [
    { name: 'Trainable Parameters', LoRA: 0.01, 'Full Fine-Tuning': 100 },
  ];

  const performanceData = [
    { task: 'MNLI', LoRA: 90.6, 'Full Fine-Tuning': 90.2 },
    { task: 'SST-2', LoRA: 96.2, 'Full Fine-Tuning': 96.4 },
    { task: 'MRPC', LoRA: 90.9, 'Full Fine-Tuning': 90.9 },
    { task: 'CoLA', LoRA: 68.2, 'Full Fine-Tuning': 68.0 },
    { task: 'QNLI', LoRA: 94.9, 'Full Fine-Tuning': 94.7 },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">LoRA: A New Way to Adapt Large Language Models</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="introduction">Introduction</TabsTrigger>
          <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="limitations">Limitations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="introduction">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" />
                  What is LoRA?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>LoRA stands for "Low-Rank Adaptation". It's a new method to adapt large language models (like GPT-3) to specific tasks more efficiently. Here's what you need to know:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>It's an alternative to traditional fine-tuning</li>
                  <li>It makes adapting large language models much more efficient</li>
                  <li>It achieves similar performance to full fine-tuning with far fewer parameters</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2" />
                  Why is LoRA Important?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>LoRA addresses several challenges in adapting large language models:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Traditional fine-tuning requires updating all model parameters, which is computationally expensive</li>
                  <li>Fine-tuned models are large and difficult to store and deploy</li>
                  <li>LoRA significantly reduces the number of trainable parameters, making adaptation more efficient</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="how-it-works">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" />
                  The LoRA Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>LoRA works by adding small, trainable "update matrices" to the model:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>The original model weights are frozen (not changed during training)</li>
                  <li>Low-rank update matrices are added to certain layers of the model</li>
                  <li>Only these small update matrices are trained, not the entire model</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>LoRA vs Full Fine-Tuning: Trainable Parameters</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={parameterComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="LoRA" fill="#8884d8" />
                    <Bar dataKey="Full Fine-Tuning" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-center mt-2">Values are relative, with Full Fine-Tuning set to 100%</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="benefits">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2" />
                  Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Reduces trainable parameters by up to 10,000 times</li>
                  <li>Uses up to 3 times less GPU memory</li>
                  <li>Training is about 25% faster on large models like GPT-3</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="mr-2" />
                  Flexibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Can be applied to specific parts of the model</li>
                  <li>Easy to switch between different tasks</li>
                  <li>Can be combined with other adaptation methods</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2" />
                  Storage Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Much smaller file sizes for adapted models</li>
                  <li>Can store many task-specific adaptations easily</li>
                  <li>Reduces costs for deploying multiple adapted models</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Comparison: LoRA vs Full Fine-Tuning</CardTitle>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="task" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="LoRA" fill="#8884d8" />
                  <Bar dataKey="Full Fine-Tuning" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-center mt-2">
                This chart shows performance on various NLP tasks using RoBERTa Large. 
                Higher scores are better. Notice how LoRA performs similarly to full fine-tuning.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="limitations">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2" />
                Current Limitations of LoRA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>While LoRA offers many benefits, it's important to be aware of its current limitations:</p>
              <ul className="list-disc list-inside mt-2">
                <li>It can be tricky to process inputs for different tasks in one go</li>
                <li>You might need to experiment with settings to get the best performance</li>
                <li>Currently, it only works with certain types of layers in neural networks</li>
                <li>Switching between tasks could potentially add some overhead if not implemented carefully</li>
              </ul>
              <p className="mt-2">Despite these limitations, LoRA represents a significant advancement in adapting large language models efficiently.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
