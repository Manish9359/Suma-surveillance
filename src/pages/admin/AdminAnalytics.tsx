import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Analytics</h2>
        <p className="text-muted-foreground">Track your business performance</p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
        <div className="rounded-full bg-primary/10 p-6 mb-4">
          <BarChart3 className="h-10 w-10 text-primary" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">Analytics Dashboard</CardTitle>
          <CardDescription className="max-w-md mx-auto mt-2">
            Detailed analytics and reports will appear here once you have sufficient order data.
            Currently this feature is waiting for real data to populate charts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* We could add basic real stats here later */}
        </CardContent>
      </Card>
    </div>
  );
}
