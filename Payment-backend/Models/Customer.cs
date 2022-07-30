using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication5.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string CustomerCity { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string CustomerName { get; set; }

        [Required]
        [Column(TypeName = "varchar(16)")]
        public string PhoneNumber { get; set; }
        public List<PaymentDetail> PaymentDetails { get; set; }
  }
}
