using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace PFservice.Models
{
    public partial class ProjetEvenementsContext : DbContext
    {
        public ProjetEvenementsContext()
        {
        }

        public ProjetEvenementsContext(DbContextOptions<ProjetEvenementsContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public virtual DbSet<Commentaire> Commentaires { get; set; }
        public virtual DbSet<Evenement> Evenements { get; set; }
        public virtual DbSet<Utilisateur> Utilisateurs { get; set; }
        public virtual DbSet<Utilisateurevenement> Utilisateurevenements { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySQL("user id=root;password=root;server=localhost;sslmode=None;allowpublickeyretrieval=True;port=3308;database=projetevenements;persistsecurityinfo=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Commentaire>(entity =>
            {
                entity.HasKey(e => e.IdCommentaire)
                    .HasName("PRIMARY");

                entity.ToTable("commentaire");

                entity.HasComment("id généré côté client");

                entity.HasIndex(e => e.IdEvenement, "FK_EvenComm");

                entity.HasIndex(e => e.IdUtilisateur, "FK_UtilComm");

                entity.Property(e => e.IdCommentaire).HasColumnName("idCommentaire");

                entity.Property(e => e.Date).HasColumnName("date");

                entity.Property(e => e.IdEvenement).HasColumnName("idEvenement");

                entity.Property(e => e.IdUtilisateur).HasColumnName("idUtilisateur");

                entity.Property(e => e.Texte)
                    .HasMaxLength(200)
                    .HasColumnName("texte");

                entity.HasOne(d => d.IdEvenementNavigation)
                    .WithMany(p => p.Commentaires)
                    .HasForeignKey(d => d.IdEvenement)
                    .HasConstraintName("FK_EvenComm");

                entity.HasOne(d => d.IdUtilisateurNavigation)
                    .WithMany(p => p.Commentaires)
                    .HasForeignKey(d => d.IdUtilisateur)
                    .HasConstraintName("FK_UtilComm");
            });

            modelBuilder.Entity<Evenement>(entity =>
            {
                entity.HasKey(e => e.IdEvenement)
                    .HasName("PRIMARY");

                entity.ToTable("evenement");

                entity.HasComment("id généré côté client");

                entity.HasIndex(e => e.IdOrganisateur, "FK_organisateur");

                entity.Property(e => e.IdEvenement).HasColumnName("idEvenement");

                entity.Property(e => e.Date).HasColumnName("date");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .HasColumnName("description");

                entity.Property(e => e.IdOrganisateur).HasColumnName("idOrganisateur");

                entity.Property(e => e.Location)
                    .HasMaxLength(50)
                    .HasColumnName("location");

                entity.Property(e => e.NomEvenement).HasColumnName("nomEvenement");

                entity.HasOne(d => d.IdOrganisateurNavigation)
                    .WithMany(p => p.Evenements)
                    .HasForeignKey(d => d.IdOrganisateur)
                    .HasConstraintName("FK_organisateur");
            });

            modelBuilder.Entity<Utilisateur>(entity =>
            {
                entity.HasKey(e => e.IdUtilisateur)
                    .HasName("PRIMARY");

                entity.ToTable("utilisateur");

                entity.HasComment("id généré côté client");

                entity.Property(e => e.IdUtilisateur).HasColumnName("idUtilisateur");

                entity.Property(e => e.Courriel)
                    .HasMaxLength(50)
                    .HasColumnName("courriel");

                entity.Property(e => e.DateCreation)
                    .HasColumnType("date")
                    .HasColumnName("dateCreation");

                entity.Property(e => e.MotDePasse)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("motDePasse");

                entity.Property(e => e.NomUtilisateur)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("nomUtilisateur");

                entity.Property(e => e.Telephone)
                    .HasMaxLength(10)
                    .HasColumnName("telephone");
            });

            modelBuilder.Entity<Utilisateurevenement>(entity =>
            {
                entity.HasKey(e => new { e.IdEvenement, e.IdUtilisateur })
                    .HasName("PRIMARY");

                entity.ToTable("utilisateurevenement");

                entity.HasIndex(e => e.IdUtilisateur, "FK_Util");

                entity.Property(e => e.IdEvenement).HasColumnName("idEvenement");

                entity.Property(e => e.IdUtilisateur).HasColumnName("idUtilisateur");

                entity.HasOne(d => d.IdEvenementNavigation)
                    .WithMany(p => p.Utilisateurevenements)
                    .HasForeignKey(d => d.IdEvenement)
                    .HasConstraintName("FK_Even");

                entity.HasOne(d => d.IdUtilisateurNavigation)
                    .WithMany(p => p.Utilisateurevenements)
                    .HasForeignKey(d => d.IdUtilisateur)
                    .HasConstraintName("FK_Util");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
