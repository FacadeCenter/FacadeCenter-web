"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Star, Clock, Users, BookOpen, TrendingUp, Award, Zap, ChevronRight, Play, Download, Heart, Share2, BarChart3, Sparkles } from "lucide-react";
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
        title: "Complete Java Programming Masterclass",
        category: "Programming",
        description: "Master Java from basics to advanced concepts with real-world projects",
        price: 5000,
        originalPrice: 8000,
        image: "/course-java.png",
        instructor: "Dr. Sarah Johnson",
        rating: 4.8,
        students: 12543,
        duration: "42h",
        lessons: 156,
        level: "Beginner",
        trending: true,
        bestseller: true,
    },
    {
        id: 2,
        title: "Full Stack Web Development Bootcamp",
        category: "Web Development",
        description: "Build modern web applications with React, Node.js, and MongoDB",
        price: 5000,
        originalPrice: 9000,
        image: "/course-web.png",
        instructor: "Michael Chen",
        rating: 4.9,
        students: 18234,
        duration: "38h",
        lessons: 142,
        level: "Intermediate",
        bestseller: true,
        progress: 35,
    },
    {
        id: 3,
        title: "Data Science & Machine Learning",
        category: "Data Science",
        description: "Learn Python, ML algorithms, and data visualization techniques",
        price: 5000,
        image: "/course-data.png",
        instructor: "Prof. Emily Rodriguez",
        rating: 4.7,
        students: 9876,
        duration: "52h",
        lessons: 178,
        level: "Advanced",
        trending: true,
    },
    {
        id: 4,
        title: "UI/UX Design Masterclass",
        category: "Design",
        description: "Create stunning user interfaces with Figma and modern design principles",
        price: 5000,
        originalPrice: 7000,
        image: "/course-design.png",
        instructor: "Alex Thompson",
        rating: 4.9,
        students: 15432,
        duration: "28h",
        lessons: 98,
        level: "Beginner",
        progress: 60,
    },
    {
        id: 5,
        title: "Advanced JavaScript & TypeScript",
        category: "Programming",
        description: "Deep dive into modern JavaScript and TypeScript development",
        price: 5000,
        image: "/course-java.png",
        instructor: "David Park",
        rating: 4.8,
        students: 11234,
        duration: "35h",
        lessons: 124,
        level: "Advanced",
        trending: true,
    },
    {
        id: 6,
        title: "Cloud Computing with AWS",
        category: "Web Development",
        description: "Master AWS services and cloud architecture patterns",
        price: 5000,
        originalPrice: 8500,
        image: "/course-web.png",
        instructor: "Lisa Anderson",
        rating: 4.6,
        students: 8765,
        duration: "24h",
        lessons: 86,
        level: "Intermediate",
        bestseller: true,
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
                            <aside className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden`}>
                                <div className="sticky top-24 space-y-6">
                                    {/* Filter Header */}
                                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                <Filter className="w-5 h-5 text-purple-400" />
                                                Filters
                                            </h3>
                                            <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                                                Reset
                                            </button>
                                        </div>

                                        {/* Category Filter */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Category</h4>
                                            <div className="space-y-2">
                                                {categories.map((cat) => (
                                                    <button
                                                        key={cat}
                                                        onClick={() => setSelectedCategory(cat)}
                                                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 ${selectedCategory === cat
                                                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                                                            : "bg-white/5 text-gray-300 hover:bg-white/10"
                                                            }`}
                                                    >
                                                        {cat}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Level Filter */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Level</h4>
                                            <div className="space-y-2">
                                                {levels.map((level) => (
                                                    <button
                                                        key={level}
                                                        onClick={() => setSelectedLevel(level)}
                                                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 ${selectedLevel === level
                                                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                                                            : "bg-white/5 text-gray-300 hover:bg-white/10"
                                                            }`}
                                                    >
                                                        {level}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Price Filter */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Price Range</h4>
                                            <div className="space-y-2">
                                                {priceRanges.map((price) => (
                                                    <button
                                                        key={price}
                                                        onClick={() => setSelectedPrice(price)}
                                                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 ${selectedPrice === price
                                                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                                                            : "bg-white/5 text-gray-300 hover:bg-white/10"
                                                            }`}
                                                    >
                                                        {price}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Featured Banner */}
                                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 text-center">
                                        <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                                        <h4 className="text-white font-bold mb-2">Premium Access</h4>
                                        <p className="text-gray-300 text-sm mb-4">Get unlimited access to all courses</p>
                                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 rounded-lg font-semibold transition-all">
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
                                <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}>
                                    {filteredCourses.map((course) => (
                                        <Link
                                            key={course.id}
                                            href={`/courses/${course.id}`}
                                            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 block"
                                        >
                                            {/* Course Image */}
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={course.image}
                                                    alt={course.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                                {/* Badges */}
                                                <div className="absolute top-3 left-3 flex gap-2">
                                                    {course.trending && (
                                                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                                            <TrendingUp className="w-3 h-3" />
                                                            Trending
                                                        </span>
                                                    )}
                                                    {course.bestseller && (
                                                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                                            <Award className="w-3 h-3" />
                                                            Bestseller
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Quick Actions */}
                                                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={(e) => e.preventDefault()}
                                                        className="bg-white/20 backdrop-blur-md hover:bg-white/30 p-2 rounded-full transition-all"
                                                    >
                                                        <Heart className="w-4 h-4 text-white" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => e.preventDefault()}
                                                        className="bg-white/20 backdrop-blur-md hover:bg-white/30 p-2 rounded-full transition-all"
                                                    >
                                                        <Share2 className="w-4 h-4 text-white" />
                                                    </button>
                                                </div>

                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="bg-white/20 backdrop-blur-md border-2 border-white/50 hover:bg-white/30 p-4 rounded-full transition-all transform group-hover:scale-110">
                                                        <Play className="w-8 h-8 text-white fill-white" />
                                                    </div>
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

                                            {/* Course Content */}
                                            <div className="p-5">
                                                {/* Category */}
                                                <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
                                                    {course.category}
                                                </p>

                                                {/* Title */}
                                                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                                                    {course.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                    {course.description}
                                                </p>

                                                {/* Instructor */}
                                                <p className="text-gray-300 text-sm mb-3">
                                                    by <span className="text-purple-400 font-semibold">{course.instructor}</span>
                                                </p>

                                                {/* Stats */}
                                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="font-semibold">{course.rating}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Users className="w-4 h-4" />
                                                        <span>{course.students.toLocaleString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{course.duration}</span>
                                                    </div>
                                                </div>

                                                {/* Progress Bar (if enrolled) */}
                                                {course.progress !== undefined && (
                                                    <div className="mb-4">
                                                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                                                            <span>Your Progress</span>
                                                            <span className="font-semibold text-purple-400">{course.progress}%</span>
                                                        </div>
                                                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                                            <div
                                                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-full rounded-full transition-all duration-500"
                                                                style={{ width: `${course.progress}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Price and CTA */}
                                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-2xl font-bold text-white">
                                                                {course.price} LKR
                                                            </span>
                                                            {course.originalPrice && (
                                                                <span className="text-sm text-gray-500 line-through">
                                                                    {course.originalPrice} LKR
                                                                </span>
                                                            )}
                                                        </div>
                                                        {course.originalPrice && (
                                                            <span className="text-xs text-green-400 font-semibold">
                                                                Save {Math.round((1 - course.price / course.originalPrice) * 100)}%
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-purple-500/30">
                                                        <span>View Details</span>
                                                        <ChevronRight className="w-4 h-4" />
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
