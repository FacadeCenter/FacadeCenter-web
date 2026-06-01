"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Star, Clock, Users, BookOpen, TrendingUp, Award, Zap, ChevronRight, Play, Heart, Share2, BarChart3, Sparkles } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { useState } from "react";

export interface Course {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    instructor: string;
    rating: number;
    students: number;
    duration: string;
    lessons: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    trending?: boolean;
    bestseller?: boolean;
    progress?: number;
}

export const courses: Course[] = [
    {
        id: 1,
        title: "DevOps Launchpad",
        category: "Programming",
        description: "Master modern DevOps practices, CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure.",
        price: 15000,
        originalPrice: 20000,
        image: "/course-web.png", // Reusing existing placeholder
        instructor: "DevOps Team",
        rating: 4.9,
        students: 2150,
        duration: "40h",
        lessons: 120,
        level: "Intermediate",
        trending: true,
        bestseller: true,
    },
    {
        id: 2,
        title: "Angular Spring boot program",
        category: "Web Development",
        description: "Build robust enterprise applications using Angular for the frontend and Spring Boot for the backend.",
        price: 12000,
        originalPrice: 18000,
        image: "/course-java.png",
        instructor: "Fullstack Team",
        rating: 4.8,
        students: 3420,
        duration: "55h",
        lessons: 160,
        level: "Advanced",
        bestseller: true,
    },
    {
        id: 3,
        title: "AI-ML",
        category: "Data Science",
        description: "Dive deep into Artificial Intelligence and Machine Learning algorithms, Python, and neural networks.",
        price: 18000,
        image: "/course-data.png",
        instructor: "AI Research Team",
        rating: 4.9,
        students: 1890,
        duration: "60h",
        lessons: 200,
        level: "Advanced",
        trending: true,
    },
    {
        id: 4,
        title: "Next jS + Nest js",
        category: "Web Development",
        description: "The ultimate modern stack: Next.js App Router on the client and NestJS on the server.",
        price: 14000,
        originalPrice: 22000,
        image: "/course-design.png",
        instructor: "Web Engineering Team",
        rating: 4.9,
        students: 4500,
        duration: "45h",
        lessons: 140,
        level: "Intermediate",
        bestseller: true,
        trending: true,
    },
];

const categories = ["All Courses", "Programming", "Web Development", "Data Science", "Design", "Business"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const priceRanges = ["All Prices", "Free", "Under 5000 LKR", "5000-10000 LKR", "10000+ LKR"];

export default function CoursesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All Courses");
    const [selectedLevel, setSelectedLevel] = useState("All Levels");
    const [selectedPrice, setSelectedPrice] = useState("All Prices");
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === "All Courses" || course.category === selectedCategory;
        const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesLevel && matchesSearch;
    });

    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
            <BackgroundVideo />
            <Navbar />

            <main className="flex-1 relative z-10">
                {/* Hero Section */}
                <section className="pt-12 pb-8 px-4 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span className="text-purple-300 text-sm font-semibold">Explore 1000+ Premium Courses</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                                Discover Your Next
                                <br />
                                Learning Adventure
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Master new skills with expert-led courses designed for the future
                            </p>
                        </div>

                        {/* Advanced Search Bar */}
                        <div className="max-w-3xl mx-auto">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                                <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-2 flex items-center gap-2">
                                    <Search className="w-5 h-5 text-purple-400 ml-3" />
                                    <input
                                        type="text"
                                        placeholder="Search for courses, instructors, or topics..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg py-2"
                                    />
                                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2">
                                        <span>Search</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                            {[
                                { icon: BookOpen, label: "1000+ Courses", color: "purple" },
                                { icon: Users, label: "50K+ Students", color: "green" },
                                { icon: Award, label: "Expert Instructors", color: "blue" },
                                { icon: TrendingUp, label: "Career Growth", color: "green" },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                                    <stat.icon className={`w-8 h-8 mx-auto mb-2 text-${stat.color}-400 group-hover:scale-110 transition-transform`} />
                                    <p className="text-white font-semibold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content with Sidebar */}
                <section className="py-8 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex gap-6">
                            {/* Sidebar */}
                            <aside className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-500 overflow-hidden shrink-0`}>
                                <div className="sticky top-28 space-y-6">
                                    {/* Filter Header */}
                                    <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                <Filter className="w-5 h-5 text-purple-400" />
                                                Filters
                                            </h3>
                                            <button 
                                                className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
                                                onClick={() => {
                                                    setSelectedCategory("All Courses");
                                                    setSelectedLevel("All Levels");
                                                    setSelectedPrice("All Prices");
                                                }}
                                            >
                                                Reset
                                            </button>
                                        </div>

                                        {/* Category Filter */}
                                        <div className="mb-6">
                                            <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Category</h4>
                                            <div className="space-y-1.5">
                                                {categories.map((cat) => (
                                                    <button
                                                        key={cat}
                                                        onClick={() => setSelectedCategory(cat)}
                                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${selectedCategory === cat
                                                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 scale-[1.02]"
                                                            : "bg-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                                                            }`}
                                                    >
                                                        {cat}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Level Filter */}
                                        <div className="mb-6">
                                            <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Level</h4>
                                            <div className="space-y-1.5">
                                                {levels.map((level) => (
                                                    <button
                                                        key={level}
                                                        onClick={() => setSelectedLevel(level)}
                                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${selectedLevel === level
                                                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 scale-[1.02]"
                                                            : "bg-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                                                            }`}
                                                    >
                                                        {level}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Price Filter */}
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Price Range</h4>
                                            <div className="space-y-1.5">
                                                {priceRanges.map((price) => (
                                                    <button
                                                        key={price}
                                                        onClick={() => setSelectedPrice(price)}
                                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${selectedPrice === price
                                                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 scale-[1.02]"
                                                            : "bg-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                                                            }`}
                                                    >
                                                        {price}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Featured Banner */}
                                    <div className="relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 text-center group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                                        <h4 className="text-white font-bold text-xl mb-2">Premium Access</h4>
                                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">Unlock the full potential of your career with unlimited access to all courses.</p>
                                        <button className="relative w-full bg-white text-black py-3 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                            Upgrade Now
                                        </button>
                                    </div>
                                </div>
                            </aside>

                            {/* Course Grid */}
                            <div className="flex-1">
                                {/* Toolbar */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setSidebarOpen(!sidebarOpen)}
                                            className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                                        >
                                            <Filter className="w-4 h-4" />
                                            <span>{sidebarOpen ? 'Hide' : 'Show'} Filters</span>
                                        </button>
                                        <p className="text-gray-400">
                                            <span className="text-white font-semibold">{filteredCourses.length}</span> courses found
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setViewMode("grid")}
                                            className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-purple-600 text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"
                                                }`}
                                        >
                                            <BarChart3 className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setViewMode("list")}
                                            className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-purple-600 text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"
                                                }`}
                                        >
                                            <BookOpen className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Courses */}
                                <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-8`}>
                                    {filteredCourses.map((course) => (
                                        <Link
                                            key={course.id}
                                            href={`/courses/${course.id}`}
                                            className="group relative flex flex-col bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] hover:-translate-y-2"
                                        >
                                            {/* Course Image */}
                                            <div className="relative h-56 overflow-hidden w-full">
                                                <Image
                                                    src={course.image}
                                                    alt={course.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                                {/* Badges */}
                                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                                    {course.trending && (
                                                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                                                            <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                                                            Trending
                                                        </span>
                                                    )}
                                                    {course.bestseller && (
                                                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                                                            <Award className="w-3.5 h-3.5 text-yellow-400" />
                                                            Bestseller
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Quick Actions */}
                                                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                                    <button
                                                        onClick={(e) => { e.preventDefault(); /* Handle action */ }}
                                                        className="bg-black/50 backdrop-blur-md hover:bg-purple-600 p-2.5 rounded-full transition-colors border border-white/10 text-white"
                                                    >
                                                        <Heart className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.preventDefault(); /* Handle action */ }}
                                                        className="bg-black/50 backdrop-blur-md hover:bg-purple-600 p-2.5 rounded-full transition-colors border border-white/10 text-white"
                                                    >
                                                        <Share2 className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="bg-purple-600/90 backdrop-blur-md p-4 rounded-full transition-transform transform scale-75 group-hover:scale-100 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                                    </div>
                                                </div>

                                                {/* Level & Category */}
                                                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${course.level === "Beginner" ? "bg-green-500/20 text-green-300 border-green-500/30" :
                                                        course.level === "Intermediate" ? "bg-blue-500/20 text-blue-300 border-blue-500/30" :
                                                            "bg-purple-500/20 text-purple-300 border-purple-500/30"
                                                        }`}>
                                                        {course.level}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Course Content */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                                                    <p className="text-purple-400 text-xs font-bold uppercase tracking-widest">
                                                        {course.category}
                                                    </p>
                                                </div>

                                                <h3 className="text-white font-bold text-xl mb-3 line-clamp-2 leading-tight group-hover:text-purple-300 transition-colors">
                                                    {course.title}
                                                </h3>

                                                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
                                                    {course.description}
                                                </p>

                                                <div className="flex items-center justify-between border-t border-white/10 pt-5 mb-5">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                                                            {course.instructor.charAt(0)}
                                                        </div>
                                                        <span className="text-gray-300 text-sm font-medium">{course.instructor}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full">
                                                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                                        <span className="text-white text-sm font-bold">{course.rating}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-5 text-sm text-gray-400 mb-6">
                                                    <div className="flex items-center gap-2">
                                                        <Users className="w-4 h-4 text-purple-400" />
                                                        <span>{course.students.toLocaleString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-blue-400" />
                                                        <span>{course.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <BookOpen className="w-4 h-4 text-green-400" />
                                                        <span>{course.lessons}</span>
                                                    </div>
                                                </div>

                                                {/* Price and CTA */}
                                                <div className="flex items-center justify-between mt-auto">
                                                    <div className="flex flex-col">
                                                        <div className="flex items-baseline gap-2">
                                                            <span className="text-2xl font-black text-white">
                                                                {course.price.toLocaleString()} <span className="text-sm font-medium text-gray-400">LKR</span>
                                                            </span>
                                                        </div>
                                                        {course.originalPrice && (
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <span className="text-sm text-gray-500 line-through font-medium">
                                                                    {course.originalPrice.toLocaleString()} LKR
                                                                </span>
                                                                <span className="text-xs text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded">
                                                                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300">
                                                        <ChevronRight className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* No Results */}
                                {filteredCourses.length === 0 && (
                                    <div className="text-center py-20">
                                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 max-w-md mx-auto">
                                            <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
                                            <p className="text-gray-400 mb-6">Try adjusting your filters or search query</p>
                                            <button
                                                onClick={() => {
                                                    setSelectedCategory("All Courses");
                                                    setSelectedLevel("All Levels");
                                                    setSelectedPrice("All Prices");
                                                    setSearchQuery("");
                                                }}
                                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                                            >
                                                Reset Filters
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
