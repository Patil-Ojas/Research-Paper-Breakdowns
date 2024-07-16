import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BookOpen, Brain, ChartBar, Award } from 'lucide-react';

const performanceData = [
  { name: 'GPT-3 (FT)', params: 175255.8, accuracy: 73.8 },
  { name: 'GPT-3 (BitFit)', params: 14.2, accuracy: 71.3 },
  { name: 'GPT-3 (PreEmbed)', params: 3.2, accuracy: 63.1 },
  { name: 'GPT-3 (PreLayer)', params: 20.2, accuracy: 70.1 },
  { name: 'GPT-3 (Adapter H)', params: 7.1, accuracy: 71.9 },
  { name: 'GPT-3 (LoRA)', params: 4.7, accuracy: 73.4 },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">LoRA: Low-Rank Adaptation of Large Language Models</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabList className="flex justify-center mb-4">
          <Tab value={0}><BookOpen className="mr-2" />Overview</Tab>
          <Tab value={1}><Brain className="mr-2" />Methodology</Tab>
          <Tab value={2}><ChartBar className="mr-2" />Results</Tab>
          <Tab value={3}><Award className="mr-2" />Implications</Tab>
        </TabList>
        
        <TabPanel value={0}>
          <Card>
            <CardHeader>
              <CardTitle>Research Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LoRA (Low-Rank Adaptation) is an efficient fine-tuning approach for large language models. It addresses the challenges of adapting enormous pre-trained models like GPT-3 to specific tasks, which traditionally requires significant computational resources and storage.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Reduces the number of trainable parameters</li>
                <li>Maintains model quality comparable to full fine-tuning</li>
                <li>Enables quick task-switching in deployed services</li>
                <li>No additional inference latency</li>
              </ul>
            </CardContent>
          </Card>
        </TabPanel>
        
        <TabPanel value={1}>
          <Card>
            <CardHeader>
              <CardTitle>LoRA Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LoRA works by adding trainable rank decomposition matrices to frozen weights, which significantly reduces the number of parameters updated during fine-tuning.</p>
              <ol className="list-decimal pl-5 mt-2">
                <li>Freeze the pre-trained model weights</li>
                <li>Inject trainable rank decomposition matrices into each layer</li>
                <li>Only train the injected low-rank matrices</li>
                <li>Merge the LoRA parameters with the original weights during inference</li>
              </ol>
            </CardContent>
          </Card>
        </TabPanel>
        
        <TabPanel value={2}>
          <Card>
            <CardHeader>
              <CardTitle>Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="params" fill="#8884d8" name="Trainable Parameters (M)" />
                  <Bar yAxisId="right" dataKey="accuracy" fill="#82ca9d" name="Accuracy (%)" />
                </BarChart>
              </ResponsiveContainer>
              <p className="mt-4">The chart shows that LoRA achieves comparable accuracy to full fine-tuning (FT) while using significantly fewer trainable parameters.</p>
            </CardContent>
          </Card>
        </TabPanel>
        
        <TabPanel value={3}>
          <Card>
            <CardHeader>
              <CardTitle>Key Implications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Efficient adaptation of large language models to specific tasks</li>
                <li>Reduced computational resources and storage requirements</li>
                <li>Enables fine-tuning of models that were previously impractical due to size</li>
                <li>Potential for faster experimentation and deployment in production environments</li>
                <li>Opens up new research directions in understanding model adaptation mechanisms</li>
              </ul>
            </CardContent>
          </Card>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
