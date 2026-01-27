import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Tuner from "./pages/Tuner";
import Converter from "./pages/Converter";
import Synthesizer from "./pages/Synthesizer";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import QuickStart from "./pages/QuickStart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import LegalNotice from "./pages/LegalNotice";
import TermsAndConditions from "./pages/TermsAndConditions";
import BlogArticle from "./pages/BlogArticle";
import BlogArticle2 from "./pages/BlogArticle2";
import BlogArticle3 from "./pages/BlogArticle3";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/tuner"} component={Tuner} />
      <Route path={"/converter"} component={Converter} />
      <Route path={"/synthesizer"} component={Synthesizer} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/post1"} component={BlogPost1} />
      <Route path={"/blog/post2"} component={BlogPost2} />
      <Route path={"/blog/post3"} component={BlogPost3} />
      <Route path={"/blog/origen-432hz-pitagoras"} component={BlogPost1} />
      <Route path={"/blog/quinta-lobo-circulo-quintas"} component={BlogPost2} />
      <Route path={"/blog/432hz-vs-440hz-cents"} component={BlogPost3} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/quick-start"} component={QuickStart} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/cookies"} component={CookiesPolicy} />
      <Route path={"/legal"} component={LegalNotice} />
      <Route path={"/terms"} component={TermsAndConditions} />
      <Route path={"/blog/prueba-ciega-432-vs-440"} component={BlogArticle} />
      <Route path={"/blog/afinaciones-alternativas-432"} component={BlogArticle2} />
      <Route path={"/blog/evidencia-432-relaja"} component={BlogArticle3} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
