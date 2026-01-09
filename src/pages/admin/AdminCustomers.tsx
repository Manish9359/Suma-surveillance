import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AdminCustomers() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Customers</h2>
        <p className="text-muted-foreground">Manage your customer base</p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
        <div className="rounded-full bg-primary/10 p-6 mb-4">
          <Users className="h-10 w-10 text-primary" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">Customer Management</CardTitle>
          <CardDescription className="max-w-md mx-auto mt-2">
            Customer profiles will be listed here. As users sign up and place orders, their details will populate this table.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* We could add a simple list of users from localStorage 'techparts-users' here if we wanted to be fancy, but simple placeholder is safer for 'no demo data' request */}
        </CardContent>
      </Card>
    </div>
  );
}
