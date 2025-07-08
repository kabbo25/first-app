export default function About() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded in 2024, we are a passionate team dedicated to creating innovative solutions 
              that make a difference. Our journey began with a simple idea: to build technology 
              that empowers people and brings communities together.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We strive to deliver exceptional products and services that exceed our customers&apos; 
              expectations. Through continuous innovation and a commitment to excellence, we aim 
              to be at the forefront of technological advancement.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We embrace change and constantly seek new ways to improve and evolve.
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Quality</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We maintain the highest standards in everything we do, from code to customer service.
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We believe that great things happen when talented people work together.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">CEO & Founder</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">CTO</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Mike Johnson</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Lead Developer</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}