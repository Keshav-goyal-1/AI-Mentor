
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const examples = [
  {
    id: "javascript",
    label: "JavaScript",
    code: `// Function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Using the factorial function
const number = 5;
const result = factorial(number);
console.log(\`The factorial of \${number} is \${result}\`);

// Output: The factorial of 5 is 120`,
    explanation: "This example demonstrates a recursive function that calculates the factorial of a number. The factorial of a number n is the product of all positive integers less than or equal to n."
  },
  {
    id: "python",
    label: "Python",
    code: `# Function to check if a word is a palindrome
def is_palindrome(word):
    # Convert to lowercase and remove spaces
    word = word.lower().replace(" ", "")
    # Compare with reversed version
    return word == word[::-1]

# Test the function
test_words = ["radar", "hello", "A man a plan a canal Panama"]
for word in test_words:
    result = "is" if is_palindrome(word) else "is not"
    print(f"'{word}' {result} a palindrome")

# Output:
# 'radar' is a palindrome
# 'hello' is not a palindrome
# 'A man a plan a canal Panama' is a palindrome`,
    explanation: "This Python code defines a function that checks if a word is a palindrome (reads the same forward and backward). It demonstrates string manipulation, function definition, and boolean logic."
  },
  {
    id: "html",
    label: "HTML/CSS",
    code: `<!-- HTML Structure -->
<div class="card">
  <div class="card-header">
    <h2>User Profile</h2>
  </div>
  <div class="card-body">
    <img src="avatar.jpg" alt="User avatar" class="avatar">
    <h3>Jane Doe</h3>
    <p class="title">Full-stack Developer</p>
  </div>
  <div class="card-footer">
    <button class="btn primary">Follow</button>
    <button class="btn secondary">Message</button>
  </div>
</div>

<!-- CSS Styling -->
<style>
.card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 300px;
  background: white;
}
.card-header {
  background: #4a6cf7;
  color: white;
  padding: 15px;
}
.avatar {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
}
</style>`,
    explanation: "This example shows how to create a simple user profile card with HTML and CSS. It demonstrates basic layout, styling, and component design principles."
  }
];

const ExamplesSection = () => {
  const [activeTab, setActiveTab] = useState("javascript");

  return (
    <section id="examples" className="py-20 bg-codeblue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Learn From Examples</h2>
          <p className="text-codeblue-300 max-w-2xl mx-auto">
            See real code examples with explanations to help you understand programming concepts.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="javascript" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6 bg-codeblue-800 border border-codeblue-700 rounded-lg overflow-hidden">
              {examples.map((example) => (
                <TabsTrigger 
                  key={example.id} 
                  value={example.id}
                  className="data-[state=active]:bg-codeblue-700 data-[state=active]:text-codecyan py-3"
                >
                  {example.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {examples.map((example) => (
              <TabsContent key={example.id} value={example.id} className="space-y-6">
                <div className="bg-codeblue-800 rounded-lg border border-codeblue-700 overflow-hidden">
                  <div className="flex items-center gap-2 bg-codeblue-700 px-4 py-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-codeblue-300 text-xs ml-2">example.{example.id === "html" ? "html" : example.id === "python" ? "py" : "js"}</div>
                  </div>
                  <pre className="code-font bg-codeblue-800 p-4 overflow-x-auto">
                    <code className="text-codeblue-100 text-sm">{example.code}</code>
                  </pre>
                </div>
                
                <div className="bg-codeblue-700/50 border border-codeblue-700 rounded-lg p-5">
                  <h4 className="text-xl font-medium text-white mb-2">Explanation</h4>
                  <p className="text-codeblue-200">{example.explanation}</p>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button className="bg-codecyan hover:bg-codecyan-light text-codeblue-900">
                    Try This Example
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
