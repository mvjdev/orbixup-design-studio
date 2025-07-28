import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Palette, 
  Sparkles, 
  History, 
  Download, 
  Settings, 
  Plus, 
  Search,
  Filter,
  Grid3x3,
  List,
  Star,
  Clock,
  Zap
} from "lucide-react";

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Mock data pour les projets de logos
  const projects = [
    {
      id: "1",
      name: "TechCorp Logo",
      status: "completed",
      createdAt: "2024-01-15",
      tokens: 150,
      variations: 3,
      downloads: 12,
      preview: "/api/placeholder/200/200"
    },
    {
      id: "2", 
      name: "GreenStart Identity",
      status: "in-progress",
      createdAt: "2024-01-20",
      tokens: 85,
      variations: 2,
      downloads: 0,
      preview: "/api/placeholder/200/200"
    },
    {
      id: "3",
      name: "BlueWave Branding",
      status: "draft",
      createdAt: "2024-01-22",
      tokens: 45,
      variations: 1,
      downloads: 0,
      preview: "/api/placeholder/200/200"
    }
  ];

  const stats = {
    totalProjects: 15,
    completedLogos: 12,
    tokensUsed: 850,
    tokensRemaining: 150,
    totalDownloads: 48
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header du Dashboard */}
      <div className="border-b border-border/50 bg-card">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Logo</h1>
              <p className="text-muted-foreground">Gérez vos projets de création de logos</p>
            </div>
            <Button className="btn-premium gap-2">
              <Plus className="w-4 h-4" />
              Nouveau Logo
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="card-premium">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Projets Total</CardTitle>
                <Palette className="w-4 h-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.totalProjects}</div>
            </CardContent>
          </Card>

          <Card className="card-premium">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Logos Terminés</CardTitle>
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.completedLogos}</div>
            </CardContent>
          </Card>

          <Card className="card-premium">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Tokens Utilisés</CardTitle>
                <Zap className="w-4 h-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.tokensUsed}</div>
              <Progress value={(stats.tokensUsed / (stats.tokensUsed + stats.tokensRemaining)) * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="card-premium">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Téléchargements</CardTitle>
                <Download className="w-4 h-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.totalDownloads}</div>
            </CardContent>
          </Card>

          <Card className="card-premium">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Tokens Restants</CardTitle>
                <Clock className="w-4 h-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.tokensRemaining}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="projects" className="gap-2">
              <Grid3x3 className="w-4 h-4" />
              Projets
            </TabsTrigger>
            <TabsTrigger value="generator" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Générateur
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2">
              <History className="w-4 h-4" />
              Historique
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="w-4 h-4" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          {/* Onglet Projets */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Rechercher un projet..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrer
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {projects.map((project) => (
                <Card key={project.id} className="card-premium hover:shadow-glow transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold">{project.name}</CardTitle>
                        <CardDescription className="mt-1">
                          Créé le {new Date(project.createdAt).toLocaleDateString('fr-FR')}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={project.status === "completed" ? "default" : project.status === "in-progress" ? "secondary" : "outline"}
                        className="capitalize"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <Palette className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-medium text-foreground">{project.tokens}</div>
                          <div className="text-muted-foreground">Tokens</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-foreground">{project.variations}</div>
                          <div className="text-muted-foreground">Variations</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-foreground">{project.downloads}</div>
                          <div className="text-muted-foreground">DL</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger
                        </Button>
                        <Button size="sm" variant="outline">
                          <Star className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Générateur */}
          <TabsContent value="generator" className="space-y-6">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Générateur de Logo IA
                </CardTitle>
                <CardDescription>
                  Créez votre logo parfait en quelques clics avec notre IA avancée
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom de votre entreprise
                      </label>
                      <Input placeholder="Ex: TechCorp" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Secteur d'activité
                      </label>
                      <Input placeholder="Ex: Technologie, Santé, Finance..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Style souhaité
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Moderne", "Classique", "Minimaliste", "Créatif"].map((style) => (
                          <Button key={style} variant="outline" size="sm">
                            {style}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full btn-premium">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Générer mon Logo
                    </Button>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-8 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Palette className="w-16 h-16 mx-auto mb-4" />
                      <p>Votre logo apparaîtra ici</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Historique */}
          <TabsContent value="history" className="space-y-6">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Historique des Générations</CardTitle>
                <CardDescription>
                  Consultez l'historique de vos créations et téléchargements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <Palette className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{project.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(project.createdAt).toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{project.tokens} tokens</Badge>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Paramètres */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Paramètres du Dashboard</CardTitle>
                <CardDescription>
                  Personnalisez votre expérience de création de logos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4">Préférences de Génération</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-foreground">Qualité par défaut</div>
                        <div className="text-sm text-muted-foreground">Résolution de génération</div>
                      </div>
                      <select className="border border-border rounded-md px-3 py-2 bg-background">
                        <option>Haute (1024x1024)</option>
                        <option>Moyenne (512x512)</option>
                        <option>Basse (256x256)</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-foreground">Auto-sauvegarde</div>
                        <div className="text-sm text-muted-foreground">Sauvegarder automatiquement</div>
                      </div>
                      <Button size="sm" variant="outline">Activé</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;