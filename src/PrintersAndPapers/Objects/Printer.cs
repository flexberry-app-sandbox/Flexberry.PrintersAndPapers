﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.PrintersAndPapers
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Printer.
    /// </summary>
    // *** Start programmer edit section *** (Printer CustomAttributes)

    // *** End programmer edit section *** (Printer CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("PrinterE", new string[] {
            "Name as \'Name\'",
            "SerialNumber as \'Serial number\'",
            "Ready as \'Ready\'",
            "DateOfManufacture as \'Date of manufacture\'",
            "PrinterType as \'Printer type\'",
            "PrinterType.Name as \'Name\'"}, Hidden=new string[] {
            "PrinterType.Name"})]
    [AssociatedDetailViewAttribute("PrinterE", "PrinterPaper", "PrinterPaperE", true, "", "Printer paper", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("PrinterE", "PrinterType", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("PrinterL", new string[] {
            "Name as \'Name\'",
            "SerialNumber as \'Serial number\'",
            "Ready as \'Ready\'",
            "DateOfManufacture as \'Date of manufacture\'",
            "PrinterType.Name as \'Name\'"})]
    public class Printer : ICSSoft.STORMNET.DataObject
    {
        
        private int fSerialNumber;
        
        private string fName;
        
        private bool fReady;
        
        private System.DateTime fDateOfManufacture;
        
        private IIS.PrintersAndPapers.PrinterType fPrinterType;
        
        private IIS.PrintersAndPapers.DetailArrayOfPrinterPaper fPrinterPaper;
        
        // *** Start programmer edit section *** (Printer CustomMembers)

        // *** End programmer edit section *** (Printer CustomMembers)

        
        /// <summary>
        /// SerialNumber.
        /// </summary>
        // *** Start programmer edit section *** (Printer.SerialNumber CustomAttributes)

        // *** End programmer edit section *** (Printer.SerialNumber CustomAttributes)
        public virtual int SerialNumber
        {
            get
            {
                // *** Start programmer edit section *** (Printer.SerialNumber Get start)

                // *** End programmer edit section *** (Printer.SerialNumber Get start)
                int result = this.fSerialNumber;
                // *** Start programmer edit section *** (Printer.SerialNumber Get end)

                // *** End programmer edit section *** (Printer.SerialNumber Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Printer.SerialNumber Set start)

                // *** End programmer edit section *** (Printer.SerialNumber Set start)
                this.fSerialNumber = value;
                // *** Start programmer edit section *** (Printer.SerialNumber Set end)

                // *** End programmer edit section *** (Printer.SerialNumber Set end)
            }
        }
        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Printer.Name CustomAttributes)

        // *** End programmer edit section *** (Printer.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Printer.Name Get start)

                // *** End programmer edit section *** (Printer.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Printer.Name Get end)

                // *** End programmer edit section *** (Printer.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Printer.Name Set start)

                // *** End programmer edit section *** (Printer.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Printer.Name Set end)

                // *** End programmer edit section *** (Printer.Name Set end)
            }
        }
        
        /// <summary>
        /// Ready.
        /// </summary>
        // *** Start programmer edit section *** (Printer.Ready CustomAttributes)

        // *** End programmer edit section *** (Printer.Ready CustomAttributes)
        public virtual bool Ready
        {
            get
            {
                // *** Start programmer edit section *** (Printer.Ready Get start)

                // *** End programmer edit section *** (Printer.Ready Get start)
                bool result = this.fReady;
                // *** Start programmer edit section *** (Printer.Ready Get end)

                // *** End programmer edit section *** (Printer.Ready Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Printer.Ready Set start)

                // *** End programmer edit section *** (Printer.Ready Set start)
                this.fReady = value;
                // *** Start programmer edit section *** (Printer.Ready Set end)

                // *** End programmer edit section *** (Printer.Ready Set end)
            }
        }
        
        /// <summary>
        /// DateOfManufacture.
        /// </summary>
        // *** Start programmer edit section *** (Printer.DateOfManufacture CustomAttributes)

        // *** End programmer edit section *** (Printer.DateOfManufacture CustomAttributes)
        public virtual System.DateTime DateOfManufacture
        {
            get
            {
                // *** Start programmer edit section *** (Printer.DateOfManufacture Get start)

                // *** End programmer edit section *** (Printer.DateOfManufacture Get start)
                System.DateTime result = this.fDateOfManufacture;
                // *** Start programmer edit section *** (Printer.DateOfManufacture Get end)

                // *** End programmer edit section *** (Printer.DateOfManufacture Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Printer.DateOfManufacture Set start)

                // *** End programmer edit section *** (Printer.DateOfManufacture Set start)
                this.fDateOfManufacture = value;
                // *** Start programmer edit section *** (Printer.DateOfManufacture Set end)

                // *** End programmer edit section *** (Printer.DateOfManufacture Set end)
            }
        }
        
        /// <summary>
        /// Printer.
        /// </summary>
        // *** Start programmer edit section *** (Printer.PrinterType CustomAttributes)

        // *** End programmer edit section *** (Printer.PrinterType CustomAttributes)
        [NotNull()]
        public virtual IIS.PrintersAndPapers.PrinterType PrinterType
        {
            get
            {
                // *** Start programmer edit section *** (Printer.PrinterType Get start)

                // *** End programmer edit section *** (Printer.PrinterType Get start)
                IIS.PrintersAndPapers.PrinterType result = this.fPrinterType;
                // *** Start programmer edit section *** (Printer.PrinterType Get end)

                // *** End programmer edit section *** (Printer.PrinterType Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Printer.PrinterType Set start)

                // *** End programmer edit section *** (Printer.PrinterType Set start)
                this.fPrinterType = value;
                // *** Start programmer edit section *** (Printer.PrinterType Set end)

                // *** End programmer edit section *** (Printer.PrinterType Set end)
            }
        }
        
        /// <summary>
        /// Printer.
        /// </summary>
        // *** Start programmer edit section *** (Printer.PrinterPaper CustomAttributes)

        // *** End programmer edit section *** (Printer.PrinterPaper CustomAttributes)
        public virtual IIS.PrintersAndPapers.DetailArrayOfPrinterPaper PrinterPaper
        {
            get
            {
                // *** Start programmer edit section *** (Printer.PrinterPaper Get start)

                // *** End programmer edit section *** (Printer.PrinterPaper Get start)
                if ((this.fPrinterPaper == null))
                {
                    this.fPrinterPaper = new IIS.PrintersAndPapers.DetailArrayOfPrinterPaper(this);
                }
                IIS.PrintersAndPapers.DetailArrayOfPrinterPaper result = this.fPrinterPaper;
                // *** Start programmer edit section *** (Printer.PrinterPaper Get end)

                // *** End programmer edit section *** (Printer.PrinterPaper Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Printer.PrinterPaper Set start)

                // *** End programmer edit section *** (Printer.PrinterPaper Set start)
                this.fPrinterPaper = value;
                // *** Start programmer edit section *** (Printer.PrinterPaper Set end)

                // *** End programmer edit section *** (Printer.PrinterPaper Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "PrinterE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PrinterE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PrinterE", typeof(IIS.PrintersAndPapers.Printer));
                }
            }
            
            /// <summary>
            /// "PrinterL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PrinterL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PrinterL", typeof(IIS.PrintersAndPapers.Printer));
                }
            }
        }
    }
}