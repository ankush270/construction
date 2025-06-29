import React from 'react'
import { motion } from 'framer-motion'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Sustainable Construction Practices for 2024',
      excerpt: 'Discover the latest trends in sustainable construction and how they\'re shaping the future of the industry.',
      image: '/gallery1.jpg',
      category: 'Sustainability',
      author: 'John Smith',
      date: 'March 15, 2024',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Innovations in Water Treatment Technology',
      excerpt: 'Exploring cutting-edge water treatment solutions that are revolutionizing environmental engineering.',
      image: '/gallery2.jpg',
      category: 'Technology',
      author: 'Sarah Johnson',
      date: 'March 12, 2024',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 3,
      title: 'The Future of Smart Infrastructure',
      excerpt: 'How IoT and AI are transforming infrastructure development and maintenance practices.',
      image: '/gallery3.jpg',
      category: 'Innovation',
      author: 'Mike Chen',
      date: 'March 10, 2024',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Industrial Safety Standards in Modern Construction',
      excerpt: 'Essential safety protocols and standards that every construction project must implement.',
      image: '/gallery4.jpg',
      category: 'Safety',
      author: 'Emily Davis',
      date: 'March 8, 2024',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Green Building Materials: A Complete Guide',
      excerpt: 'Comprehensive overview of eco-friendly building materials and their benefits.',
      image: '/gallery5.jpg',
      category: 'Materials',
      author: 'David Wilson',
      date: 'March 5, 2024',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Project Management Best Practices',
      excerpt: 'Key strategies for successful project management in construction and engineering.',
      image: '/gallery6.jpg',
      category: 'Management',
      author: 'Lisa Brown',
      date: 'March 3, 2024',
      readTime: '5 min read',
      featured: false
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="blog" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in construction and engineering
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <motion.div 
              key={post.id}
              className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              whileHover={{ y: -8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <motion.button
                      className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More →
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regular Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {blogPosts.filter(post => !post.featured).map((post) => (
            <motion.article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                  
                  <motion.button
                    className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Posts Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Blog Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog 