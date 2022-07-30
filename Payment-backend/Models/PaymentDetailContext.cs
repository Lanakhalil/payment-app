using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication5.Models;

namespace WebApplication5.Models
{
    public class PaymentDetailContext: DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options) :base(options)
        {

        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PaymentDetail>()
                .HasOne(p => p.Bank)
                .WithMany(p => p.PaymentDetails)
                .HasForeignKey(p => p.BanklId);

            modelBuilder.Entity<PaymentDetail>()
               .HasOne(p => p.Customer)
               .WithMany(p => p.PaymentDetails)
               .HasForeignKey(p => p.CustomerId);
        }
        
        public DbSet<PaymentDetail>  PaymentDetails { get; set; }
        public DbSet<Bank> Banks { get; set; }
        public DbSet<WebApplication5.Models.Customer> Customer { get; set; }

    }
}
