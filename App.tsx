import {
  CheckCircle2,
  ChevronRight,
  Code,
  Layers,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import { Wizard } from "./components/Wizard";
import { useRTL } from "./hooks/useRTL";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <Hero />

      {/* How it Works Section */}
      <section className="py-24 bg-[#DFE5EA]/30" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#1E4C9D] mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t("howItWorks.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl font-black text-[#3A7DFF]/10 absolute top-4 right-4 group-hover:text-[#3A7DFF]/20 transition-colors">
                  0{idx}
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#3A7DFF] mb-6">
                  {idx === 1 && <Code size={24} />}
                  {idx === 2 && <Layers size={24} />}
                  {idx === 3 && <Zap size={24} />}
                  {idx === 4 && <CheckCircle2 size={24} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`howItWorks.steps.step${idx}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t(`howItWorks.steps.step${idx}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-[#1E4C9D] mb-8 leading-tight">
                {t("forWhom.title")}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {t("forWhom.indieDevelopers.title")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("forWhom.indieDevelopers.description")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {t("forWhom.startupFounders.title")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("forWhom.startupFounders.description")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {t("forWhom.students.title")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("forWhom.students.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#1E4C9D] p-8 rounded-3xl shadow-2xl relative z-10 overflow-hidden text-white">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-mono opacity-50">
                    src/schema.prisma
                  </div>
                </div>
                <pre className="text-sm font-mono leading-relaxed opacity-90 overflow-x-auto">
                  {`model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  projects  Project[]
}

model Project {
  id        String   @id @default(cuid())
  name      String
  ownerId   String
  owner     User     @relation(fields: [ownerId], references: [id])
}`}
                </pre>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 p-6 rounded-2xl shadow-xl z-20 max-w-[200px] animate-bounce-slow">
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={20} className="text-[#3A7DFF]" />
                  <span className="font-black text-sm uppercase tracking-wider">
                    {t("privacy.badge")}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-tight">
                  {t("privacy.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1E4C9D] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-blue-100 mb-12 text-lg max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/generate"
              className="px-12 py-5 bg-[#3A7DFF] text-white rounded-2xl font-black text-xl hover:bg-white hover:text-[#1E4C9D] transition-all flex items-center justify-center gap-3"
            >
              {t("cta.button")} <ChevronRight size={24} />
            </Link>
          </div>
        </div>
        {/* Decor */}
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </section>
    </div>
  );
};

const AuthPage = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-[#1E4C9D] mb-2">
            {isLogin ? t("auth.login") : t("auth.register")}
          </h2>
          <p className="text-gray-500">{t("auth.tagline")}</p>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                {t("auth.fullName")}
              </label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
                placeholder={t("auth.fullNamePlaceholder")}
              />
            </div>
          )}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              {t("auth.email")}
            </label>
            <input
              type="email"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              placeholder={t("auth.emailPlaceholder")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              {t("auth.password")}
            </label>
            <input
              type="password"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              placeholder={t("auth.passwordPlaceholder")}
            />
          </div>
          <button className="w-full py-4 bg-[#3A7DFF] text-white rounded-xl font-bold shadow-lg hover:shadow-blue-100 transition-all active:scale-[0.98]">
            {isLogin ? t("auth.signInButton") : t("auth.createAccountButton")}
          </button>
        </form>
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#3A7DFF] font-bold hover:underline"
          >
            {isLogin ? t("auth.switchToSignup") : t("auth.switchToLogin")}
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-xs text-gray-400 font-medium uppercase tracking-widest mb-6">
            {t("auth.orContinueWith")}
          </p>
          <button className="w-full py-4 flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="Google"
            />
            {t("auth.google")}
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  useRTL();

  // Initialization for Analytics (Placeholders)
  React.useEffect(() => {
    // Analytics & Clarity init would go here
    console.log(
      "Analytics Initialized: Google Analytics, Microsoft Clarity ready."
    );
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<Wizard />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
