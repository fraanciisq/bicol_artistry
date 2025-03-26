import { Layout } from "@/components/layout/Layout";
import { FileText, ListOrdered } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-display font-medium mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our website and services.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-4">
            <FileText className="h-8 w-8 text-bicol" />
            <div>
              <CardTitle>Acceptance of Terms</CardTitle>
              <CardDescription>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              By accessing or using Bicol Crafts' website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            <p>
              We reserve the right to modify these terms at any time, so please review them frequently. Your continued use of the website after any modifications indicates your acceptance of the modified terms.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Use of Website</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                The content of this website is for your general information and use only. It is subject to change without notice.
              </p>
              <p>
                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
              </p>
              <p>
                Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Products & Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time.
              </p>
              <p>
                Prices for our products are subject to change without notice. We shall not be liable for any price inaccuracies on the website.
              </p>
              <p>
                We reserve the right to refuse service to anyone for any reason at any time.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-4">
            <ListOrdered className="h-8 w-8 text-bicol" />
            <CardTitle>Privacy Policy & Data Protection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We are committed to protecting your privacy. Any personal information collected will only be used in accordance with our Privacy Policy.
            </p>
            <p>
              By using our website, you consent to the collection and use of your personal information as described in our Privacy Policy.
            </p>
            <p>
              We use cookies to enhance your experience on our website. By continuing to use our website, you consent to our use of cookies.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Shipping & Returns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Shipping times and costs are estimates and may vary depending on your location. We are not responsible for any delays caused by customs or other third-party services.
            </p>
            <p>
              Returns are accepted within 14 days of delivery. Items must be in original condition with all tags and packaging intact. Customers are responsible for return shipping costs unless the item is defective.
            </p>
            <p>
              For defective items, please contact our customer service within 48 hours of receiving your package.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the Philippines, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            <p>
              If you have any questions regarding these Terms and Conditions, please contact us at <a href="mailto:hello@bicolartistry.com" className="text-bicol hover:underline">hello@bicolartistry.com</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TermsPage;
