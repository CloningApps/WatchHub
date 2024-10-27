import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Trending, Subscriptions, Library, History, PlaySquare, Clock, ThumbsUp, Menu, Search, User } from "lucide-react"

export default function WatchHub() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={toggleSidebar}>
            <Menu />
          </Button>
          <h1 className="text-2xl font-bold">WatchHub</h1>
        </div>
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <Input type="search" placeholder="Search" className="mr-2" />
          <Button size="icon" variant="ghost">
            <Search />
          </Button>
        </div>
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-64 p-4 border-r overflow-auto`}
        >
          <ScrollArea className="h-full">
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2" size={20} />
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Trending className="mr-2" size={20} />
                Trending
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Subscriptions className="mr-2" size={20} />
                Subscriptions
              </Button>
              <hr className="my-4" />
              <Button variant="ghost" className="w-full justify-start">
                <Library className="mr-2" size={20} />
                Library
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <History className="mr-2" size={20} />
                History
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <PlaySquare className="mr-2" size={20} />
                Your videos
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Clock className="mr-2" size={20} />
                Watch later
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ThumbsUp className="mr-2" size={20} />
                Liked videos
              </Button>
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=180&width=320&text=Video+${i + 1}`}
                    alt={`Video thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Channel" />
                    <AvatarFallback>CH</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium leading-none">Video Title {i + 1}</h3>
                    <p className="text-xs text-muted-foreground">Channel Name</p>
                    <p className="text-xs text-muted-foreground">123K views • 1 day ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
      }
