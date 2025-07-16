// "use client"
// import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";
// import Link from "next/link";
// import Image from 'next/image';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';

// export default function Home() {
//     const [text] = useTypewriter({
//         words: ['Power of AI.','Future of Automation.','Creative AI Solutions.','Power of Automation.','Digital Intelligence.','Next-Gen Creativity.','Intelligence Revolution.'],
//         loop: true
//     });

//     return (
//         <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/img_4.jpg')" }}>
//             {/* Top Right User Button */}
//             <div className="absolute top-4 right-4">
//                 <UserButton />
//             </div>
            
//             {/* Main Content */}
//             <div className="text-center text-white  bg-opacity-50 p-10 rounded-xl shadow-lg max-w-2xl">
//                 <h1 className="text-4xl font-bold">Welcome to <span className="hover:text-5xl hover:underline cursor-pointer">Alpha<span className="text-slate-400">Sense</span></span></h1>
//                 <h2 className="text-slate-300">a free AI SaaS platform..</h2>
//                 <div className="flex justify-center mt-4">
//                     <Image src={'/logo.svg'} alt='logo' width={160} height={100} />
//                 </div>
//                 <h1 className="mt-5 text-2xl font-bold">
//                     Explore the <span className="text-slate-300">{text}</span><Cursor />
//                 </h1>
                
//                 <h1 className="font-bold mt-6 text-slate-300">
//                     Create your own Content, CV, Forms, and more in just seconds<br /> not hours...
//                 </h1>
                
//                 {/* Buttons */}
//                 <div className="mt-6 space-y-4">
//                     <h2 className="text-slate-300">What do you want to do?...</h2>
//                     <Link href={'/dashboard'}>
//                         <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
//                             Create Your own Content using AI
//                         </Button>
//                     </Link>
//                     <Link href={'/dashboard1'}>
//                         <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
//                             Get your free Mock Interview done using AI
//                         </Button>
//                     </Link>
//                     <Link href={'/dashboard2'}>
//                         <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
//                             Build your CV in just seconds using AI
//                         </Button>
//                     </Link>
//                     <Link href={'/dashboard3'}>
//                         <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
//                             Create your own Form using AI
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }





"use client"
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {
    const [text] = useTypewriter({
        words: [
            'Power of AI',
            'Future of Automation',
            'Intelligence Revolution',
            'Next-Gen Creativity',
            'Limitless Possibilities',
            'Smart AI Solutions'
        ],
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 50,
    });

    const features = [
        {
            title: "AI-Powered Content",
            description: "Generate high-quality content in seconds with our advanced AI technology.",
            icon: "✍️"
        },
        {
            title: "Mock Interviews",
            description: "Practice with AI-powered mock interviews to ace your next job opportunity.",
            icon: "🎤"
        },
        {
            title: "Professional CV Builder",
            description: "Create a standout CV that gets you noticed by recruiters.",
            icon: "📄"
        },
        {
            title: "Smart Forms",
            description: "Design and deploy custom forms with our intuitive form builder.",
            icon: "📑"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            {/* Navigation */}
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image src={'/logo.svg'} alt='AlphaSense Logo' width={40} height={40} />
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Alpha<span className="text-white">Sense</span>
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="#pricing" className="text-slate-300 hover:text-white">Pricing</Link>
                    <Link href="#features" className="text-slate-300 hover:text-white">Features</Link>
                    <UserButton afterSignOutUrl="/" />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Unleash the <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {text}
                        </span><Cursor />
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Create professional content, CVs, forms, and more in seconds with our AI-powered platform. 
                        Completely free, forever.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-20">
                        <Link href="#features">
                            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button variant="outline" className="px-8 py-6 text-lg font-semibold rounded-xl border-slate-600 hover:bg-slate-800/50 transition-all duration-300">
                                Explore Features
                            </Button>
                        </Link>
                    </div>
                    <div className="relative
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-slate-700/50 before:to-transparent before:animate-pulse
                        ">
                        <div className="relative bg-slate-800/50 backdrop-blur-sm p-1 rounded-2xl overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
                                        <div className="text-3xl mb-3">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-slate-400">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Everything You Need, All in One Place</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold">AI-Powered Content Creation</h3>
                            <p className="text-slate-300 text-lg">
                                Generate high-quality, engaging content in seconds with our advanced AI. 
                                Perfect for blogs, social media, and professional documents.
                            </p>
                            <Link href="/dashboard">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-5 mt-4">
                                    Start Creating →
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                            <div className="bg-slate-900/80 p-6 rounded-lg border border-slate-700/50">
                                <div className="flex space-x-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <pre className="text-green-400 font-mono text-sm">
                                    {`> AI Content Generator Initialized...
> Topic: Professional SaaS Content
> Tone: Professional, Engaging
> Length: 500 words
> Generating content...

[Your AI-generated content will appear here]`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center mt-32">
                        <div className="order-2 md:order-1 bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                            <div className="p-6 bg-slate-900/80 rounded-lg">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        👤
                                    </div>
                                    <div>
                                        <div className="font-semibold">Interviewer</div>
                                        <div className="text-sm text-slate-400">AI Interview Bot</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-slate-800 p-4 rounded-lg">
                                        <p>Can you tell me about a time when you faced a significant challenge at work?</p>
                                    </div>
                                    <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                                        <p>Type your response here...</p>
                                    </div>
                                    <div className="flex justify-between text-sm text-slate-500">
                                        <span>Tip: Be specific and use the STAR method</span>
                                        <span>1/5 questions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h3 className="text-3xl font-bold">AI Mock Interviews</h3>
                            <p className="text-slate-300 text-lg">
                                Practice makes perfect. Get instant feedback on your interview responses 
                                and improve your chances of landing your dream job.
                            </p>
                            <Link href="/dashboard1">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-5 mt-4">
                                    Start Practice →
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Resume Builder Section */}
                    <div className="grid md:grid-cols-2 gap-8 items-center mt-32">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold">AI-Powered Resume Builder</h3>
                            <p className="text-slate-300 text-lg">
                                Create professional, ATS-friendly resumes in minutes. Our AI suggests powerful action verbs 
                                and optimizes your content to help you stand out to recruiters.
                            </p>
                            <Link href="/dashboard2">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-5 mt-4">
                                    Build Your Resume →
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                            <div className="bg-slate-900/80 p-6 rounded-lg border border-slate-700/50">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="text-sm text-slate-400">Resume Builder</span>
                                    </div>
                                    <div className="text-xs text-slate-500">Auto-saving...</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-800/50 rounded-lg">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-medium">Senior Software Engineer</h4>
                                                <p className="text-sm text-slate-400">Tech Company Inc. • 2020 - Present</p>
                                            </div>
                                            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Current</span>
                                        </div>
                                        <ul className="mt-2 space-y-1 text-sm text-slate-300 list-disc list-inside">
                                            <li>Led a team of 5 developers to deliver...</li>
                                            <li>Architected and implemented...</li>
                                            <li>Reduced system latency by 40% through...</li>
                                        </ul>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-slate-500">AI Suggestions: Try adding metrics to quantify your achievements</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Smart Form Builder Section */}
                    <div className="grid md:grid-cols-2 gap-8 items-center mt-32">
                        <div className="order-2 md:order-1 bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                            <div className="p-6 bg-slate-900/80 rounded-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <span className="text-sm text-slate-400">Form Builder</span>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="text-xs text-slate-400 hover:text-white">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                        </button>
                                        <button className="text-xs text-slate-400 hover:text-white">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="h-4 bg-slate-700/50 rounded w-1/3"></div>
                                        <div className="h-10 border border-slate-600 rounded-md p-2">
                                            <div className="h-1 bg-slate-600 rounded w-1/4"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-slate-700/50 rounded w-1/4"></div>
                                        <div className="h-10 border border-slate-600 rounded-md p-2">
                                            <div className="h-1 bg-slate-600 rounded w-1/3"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-slate-700/50 rounded w-1/2"></div>
                                        <div className="h-20 border border-slate-600 rounded-md p-2">
                                            <div className="h-1 bg-slate-600 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <button className="w-full py-2 text-center text-sm bg-blue-500/20 text-blue-400 rounded-md hover:bg-blue-500/30 transition-colors">
                                            + Add Field
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h3 className="text-3xl font-bold">Smart Form Builder</h3>
                            <p className="text-slate-300 text-lg">
                                Create custom forms in minutes with our drag-and-drop builder. 
                                Collect responses, analyze data, and automate your workflow effortlessly.
                            </p>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start space-x-2">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Drag-and-drop form builder</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>AI-powered field suggestions</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Real-time response collection</span>
                                </li>
                            </ul>
                            <Link href="/dashboard3">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-5 mt-4">
                                    Create a Form →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Everything you need to create amazing content, completely free.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-75 blur"></div>
                            <div className="relative bg-slate-800/80 backdrop-blur-sm p-1 rounded-2xl">
                                <div className="bg-slate-900/80 p-8 rounded-xl">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold">Free Forever</h3>
                                            <p className="text-slate-400">Perfect for individuals and small teams</p>
                                        </div>
                                        <div className="mt-4 md:mt-0">
                                            <span className="text-5xl font-bold">$0</span>
                                            <span className="text-slate-400">/month</span>
                                        </div>
                                    </div>
                                    
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Unlimited AI Content Generation</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>AI-Powered CV Builder</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Unlimited Mock Interviews</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Custom Form Builder</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Priority Support</span>
                                        </li>
                                    </ul>
                                    
                                    <Link href="#features">
                                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-6 text-lg font-semibold rounded-lg">
                                            Get Started for Free
                                        </Button>
                                    </Link>
                                    
                                    <p className="text-center text-sm text-slate-400 mt-4">No credit card required. No hidden fees.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Join thousands of users who are already creating amazing content with AlphaSense.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="#features">
                            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Image src={'/logo.svg'} alt='AlphaSense Logo' width={32} height={32} />
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Alpha<span className="text-white">Sense</span>
                                </span>
                            </div>
                            <p className="text-slate-400">Empowering creators with AI-powered tools to bring ideas to life.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-slate-400 hover:text-white">Features</Link></li>
                                <li><Link href="/" className="text-slate-400 hover:text-white">Pricing</Link></li>
                                <li><Link href="/" className="text-slate-400 hover:text-white">Templates</Link></li>
                                <li><Link href="/" className="text-slate-400 hover:text-white">Updates</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-slate-400 hover:text-white">Blog</Link></li>
                                <li><Link href="/" className="text-slate-400 hover:text-white">Tutorials</Link></li>
                                <li><Link href="/" className="text-slate-400 hover:text-white">Support</Link></li>
                                <li><Link href="/" className="text-slate-400 hover:text-white">Documentation</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-slate-400 hover:text-white">About Us</Link></li>
                                <li><Link href="/" className="text-slate-400 hover:text-white">Careers</Link></li>
                                <li><Link href="/" className="text-slate-400 hover:text-white">Contact</Link></li>
                                <li><Link href="/" className="text-slate-400 hover:text-white">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} AlphaSense. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="https://x.com/Ankithahms" className="text-slate-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </Link>
                            <Link href="https://github.com/ankith2004ahms/" className="text-slate-400 hover:text-white">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/in/ankith-m-3bba03266" className="text-slate-400 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
