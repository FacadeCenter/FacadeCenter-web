"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, Clock, Users, BookOpen, Award, Play, Download, ChevronLeft, ChevronRight, TrendingUp, ThumbsUp, ChevronDown, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { useState } from "react";
import { courses, Course } from "../page";

// Extended interface for full details
interface CourseDetails extends Course {
    longDescription: string;
    overview: string;
    objectives: string[];
    whatYouLearn: string[];
    reviews: {
        id: number;
        user: string;
        avatar: string;
        rating: number;
        comment: string;
        date: string;
    }[];
    instructorDetails: {
        name: string;
        title: string;
        avatar: string;
        bio: string;
        rating: number;
        students: number;
        courses: number;
    };
}

// Default details to merge with basic course info
const defaultDetails = {
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    overview: "Embark on a transformative journey into the dynamic world of this subject with our comprehensive course. This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional results.",
    objectives: [
        "Gain a clear understanding of the core concepts and their importance.",
        "Explore the fundamental principles and how to apply them practically.",
        "Learn about advanced techniques and industry best practices."
    ],
    whatYouLearn: [
        "Master the fundamentals and advanced concepts",
        "Build real-world projects from scratch",
        "Understand industry standards and patterns",
        "Deploy your skills professionally"
    ],
    reviews: [
        {
            id: 1,
            user: "Michael Cohen",
            avatar: "/student_1.png",
            rating: 5,
            comment: "This course is absolutely amazing. The instructor explains everything so clearly. I went from knowing nothing to building my own apps in weeks!",
            date: "2 days ago"
        },
        {
            id: 2,
            user: "Emily Blunt",
            avatar: "/student_2.png",
            rating: 4,
            comment: "Great content, very detailed. The section on advanced topics was a bit fast but overall excellent value for money.",
            date: "1 week ago"
        }
    ],
    instructorDetails: {
        name: "Dr. Sarah Johnson",
        title: "Senior Lead Instructor",
        avatar: "/instructor-avatar.png",
        bio: "Dr. Sarah Johnson is a lead software engineer with over 15 years of industry experience. She has taught over 50,000 students worldwide and is known for her ability to simplify complex concepts.",
        rating: 4.9,
        students: 52000,
        courses: 12
    }
};

// Reusable Course Card for Related Courses
const RelatedCourseCard = ({ course }: { course: Course }) => (
    <Link
        href={`/courses/${course.id}`}
        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 block"
    >
        <div className="relative h-48 overflow-hidden">
            <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.category}
                </span>
            </div>
            {/* Level Badge */}
            <div className="absolute bottom-3 left-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${course.level === "Beginner" ? "bg-green-500/80 text-white" :
                    course.level === "Intermediate" ? "bg-blue-500/80 text-white" :
                        "bg-purple-500/80 text-white"
                    }`}>
                    {course.level}
                </span>
            </div>
        </div>
        <div className="p-5">
            <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                {course.title}
            </h3>
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xl font-bold text-white">{course.price} LKR</span>
                <span className="text-purple-400 text-sm font-semibold flex items-center gap-1">
                    View Details <ChevronRight className="w-4 h-4" />
                </span>
            </div>
        </div>
    </Link>
);

export default function CourseDetailsPage() {
    const params = useParams();
    const courseId = parseInt(params.id as string);
    const basicCourse = courses.find(c => c.id === courseId) || courses[0];

    // Merge basic info with default detailed info
    // In a real app, we would fetch details from API
    const course: CourseDetails = {
        ...basicCourse,
        ...defaultDetails,
        // Override instructor name if it exists in basic info
        instructorDetails: {
            ...defaultDetails.instructorDetails,
            name: basicCourse.instructor || defaultDetails.instructorDetails.name
        }
    };

    // Get related courses (excluding current)
    const relatedCourses = courses.filter(c => c.id !== course.id).slice(0, 3);

    const [activeTab, setActiveTab] = useState<"details" | "instructor" | "courses" | "reviews" | "curriculum">("details");

    return (
        <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
            <BackgroundVideo />
            <Navbar />

            <main className="flex-1 relative z-10">
                {/* Hero Section */}
                <section className="pt-12 pb-16 px-6 md:px-[60px] lg:px-[120px] bg-gradient-to-t from-purple-900/20 via-transparent to-transparent">
                    <div className="max-w-[1440px] mx-auto">
                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors hover:-translate-x-1 duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Back to Courses</span>
                        </Link>

                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                            {/* Course Image */}
                            <div className="w-full lg:w-[595px] relative group perspective-1000">
                                <div className="relative h-[383px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                        <div className="bg-white/20 backdrop-blur-md border border-white/50 p-6 rounded-full group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                            <Play className="w-12 h-12 text-white fill-white ml-2" />
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-purple-500/30 rounded-2xl"></div>
                                <div className="absolute -z-20 -bottom-10 -right-10 w-full h-full border border-pink-500/20 rounded-2xl"></div>
                            </div>

                            {/* Course Info */}
                            <div className="flex-1 space-y-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-sm font-bold tracking-wide">
                                    {course.category}
                                </span>

                                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    {course.title}
                                </h1>

                                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                                    {course.longDescription}
                                </p>

                                <div className="flex items-center gap-6 text-gray-300 py-4 border-y border-white/10">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                        <span className="font-bold text-white">{course.rating}</span>
                                        <span className="text-sm">({course.reviews.length} reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-blue-400" />
                                        <span>{course.students.toLocaleString()} Students</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-purple-400" />
                                        <span>Certificate</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                                    <div>
                                        <div className="flex items-end gap-3">
                                            <span className="text-4xl font-bold text-white">{course.price.toLocaleString()} LKR</span>
                                            {course.originalPrice && (
                                                <span className="text-lg text-gray-500 line-through mb-1">{course.originalPrice.toLocaleString()} LKR</span>
                                            )}
                                        </div>
                                        {course.originalPrice && (
                                            <span className="text-green-400 text-sm font-semibold">
                                                You save {Math.round((1 - course.price / course.originalPrice) * 100)}%
                                            </span>
                                        )}
                                    </div>

                                    <Link href="/checkout" className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 text-center">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="py-12 px-6 md:px-[60px] lg:px-[120px]">
                    <div className="max-w-[1440px] mx-auto">
                        {/* Tabs Header */}
                        <div className="flex flex-wrap gap-4 mb-8 border-b border-white/10 pb-1 sticky top-20 z-20 bg-black/80 backdrop-blur-md pt-4">
                            {[
                                { id: "details", label: "Details" },
                                { id: "curriculum", label: "Curriculum" },
                                { id: "instructor", label: "Instructor" },
                                { id: "courses", label: "Related Courses" },
                                { id: "reviews", label: "Reviews" }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`px-8 py-3 rounded-t-xl text-base font-medium transition-all relative ${activeTab === tab.id
                                        ? "text-white bg-white/10"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[400px]">
                            {/* DETAILS TAB */}
                            {activeTab === "details" && (
                                <div className="grid lg:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="lg:col-span-2 space-y-10">
                                        {/* Overview */}
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                                <BookOpen className="w-6 h-6 text-purple-400" />
                                                Course Overview
                                            </h2>
                                            <p className="text-gray-300 leading-relaxed text-lg text-justify">
                                                {course.overview}
                                            </p>
                                        </div>

                                        {/* Objectives */}
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                                <TrendingUp className="w-6 h-6 text-green-400" />
                                                Key Learning Objectives
                                            </h2>
                                            <ul className="grid gap-3">
                                                {course.objectives.map((obj, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                                        <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs mt-0.5 font-bold shrink-0">✓</span>
                                                        <span className="flex-1 text-lg">{obj}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* What You'll Learn */}
                                        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                            <h3 className="text-xl font-bold text-white mb-6">What you'll learn</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {course.whatYouLearn.map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                                        <p className="text-gray-300">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar Info */}
                                    <div className="space-y-6">
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-40 backdrop-blur-xl">
                                            <h3 className="text-white font-bold text-lg mb-4 pb-4 border-b border-white/10">This course includes:</h3>
                                            <ul className="space-y-4 text-gray-300">
                                                <li className="flex items-center gap-3">
                                                    <Play className="w-5 h-5 text-purple-400" />
                                                    <span>{course.duration} on-demand video</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <BookOpen className="w-5 h-5 text-blue-400" />
                                                    <span>{course.lessons} lessons</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <Download className="w-5 h-5 text-green-400" />
                                                    <span>Downloadable resources</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <Award className="w-5 h-5 text-yellow-400" />
                                                    <span>Certificate of completion</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* CURRICULUM TAB */}
                            {activeTab === "curriculum" && (
                                <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">Course Curriculum</h2>
                                            <p className="text-gray-400 mt-1">{course.lessons} lessons • {course.duration} total length</p>
                                        </div>
                                        <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                                            Expand All Sections
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { title: "Getting Started & Introduction", duration: "45 min", lessons: 3, open: true },
                                            { title: "Core Concepts Fundamentals", duration: "2h 15m", lessons: 8, open: false },
                                            { title: "Advanced Techniques & Patterns", duration: "3h 30m", lessons: 12, open: false },
                                            { title: "Real-world Project Implementation", duration: "5h 45m", lessons: 15, open: false },
                                            { title: "Final Assessment & Certification", duration: "1h 00m", lessons: 2, open: false }
                                        ].map((module, i) => (
                                            <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                                                <button className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left bg-black/20">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`transition-transform duration-300 ${module.open ? "rotate-180" : ""}`}>
                                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-semibold text-white text-lg">{module.title}</h3>
                                                            <p className="text-sm text-gray-400 mt-0.5">{module.lessons} lessons • {module.duration}</p>
                                                        </div>
                                                    </div>
                                                </button>
                                                {/* Expanded Content (Simulated for demo) */}
                                                {(i === 0 || module.open) && (
                                                    <div className="bg-black/20 border-t border-white/5 divide-y divide-white/5">
                                                        {[1, 2, 3].map((lesson) => (
                                                            <div key={lesson} className="p-4 pl-14 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-pointer">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="p-2 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                                                        <Play className="w-3 h-3 fill-current" />
                                                                    </div>
                                                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                                                        {i === 0 ? ["Course Introduction", "Setting up Environment", "First Steps"][lesson - 1] : `Lesson ${lesson}: Topic details`}
                                                                    </span>
                                                                </div>
                                                                <span className="text-sm text-gray-500 mono">
                                                                    {["05:30", "15:45", "10:20"][lesson - 1] || "12:00"}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* INSTRUCTOR TAB */}
                            {activeTab === "instructor" && (
                                <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">
                                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                            <div className="w-40 h-40 rounded-full border-4 border-purple-500/30 overflow-hidden relative shadow-2xl flex-shrink-0">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20"></div>
                                                <Image
                                                    src={course.instructorDetails.avatar}
                                                    alt={course.instructorDetails.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 text-center md:text-left space-y-4">
                                                <div>
                                                    <h2 className="text-3xl font-bold text-white">{course.instructorDetails.name}</h2>
                                                    <p className="text-purple-400 text-lg font-medium">{course.instructorDetails.title}</p>
                                                </div>

                                                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-300 py-2">
                                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                        <span className="font-bold text-white">{course.instructorDetails.rating}</span> Rating
                                                    </div>
                                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                                        <Users className="w-4 h-4 text-blue-400" />
                                                        <span className="font-bold text-white">{course.instructorDetails.students.toLocaleString()}</span> Students
                                                    </div>
                                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                                        <Play className="w-4 h-4 text-green-400" />
                                                        <span className="font-bold text-white">{course.instructorDetails.courses}</span> Courses
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 leading-relaxed text-lg">
                                                    {course.instructorDetails.bio}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* COURSES TAB (Related) */}
                            {activeTab === "courses" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    {relatedCourses.length > 0 ? (
                                        relatedCourses.map((item) => (
                                            <RelatedCourseCard key={item.id} course={item} />
                                        ))
                                    ) : (
                                        <div className="col-span-3 text-center py-20 text-gray-400">
                                            No related courses found.
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* REVIEWS TAB */}
                            {activeTab === "reviews" && (
                                <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    {course.reviews.map((review) => (
                                        <div key={review.id} className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all hover:-translate-y-1">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-700 border-2 border-white/10">
                                                        <Image src={review.avatar} alt={review.user} width={56} height={56} className="object-cover" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold text-lg">{review.user}</h4>
                                                        <p className="text-sm text-gray-400">{review.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 bg-black/20 px-3 py-1 rounded-full">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed italic text-lg opacity-90">"{review.comment}"</p>
                                            <div className="mt-6 pt-6 border-t border-white/5 flex gap-4 text-sm text-gray-400">
                                                <button className="flex items-center gap-2 hover:text-white transition-colors group">
                                                    <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" /> Helpful
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
