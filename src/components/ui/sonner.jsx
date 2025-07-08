import { Toaster as Sonner } from "sonner"

function Toaster({ ...props }) {
  // For now, we'll use a default theme. You can add theme context later
  const theme = "system"

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-900 group-[.toaster]:border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-600",
          actionButton:
            "group-[.toast]:bg-blue-600 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-gray-100 group-[.toast]:text-gray-600",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }