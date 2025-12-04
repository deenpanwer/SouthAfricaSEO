import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { LinkPreview } from "@/components/ui/link-preview";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  previewUrl?: string;
};

type LogoCardProps = React.HTMLAttributes<HTMLElement> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  const content = (
    <>
      <Image
        alt={logo.alt}
        className="pointer-events-none h-8 md:h-10 w-auto dark:brightness-0 dark:invert"
        src={logo.src}
        width={logo.width || 120}
        height={logo.height || 20}
      />
      {children}
    </>
  );

  const combinedClassName = cn(
    "flex items-center justify-center bg-background px-4 py-8 md:p-8",
    className
  );

  if (logo.previewUrl) {
    return (
      <LinkPreview url={logo.previewUrl} className={combinedClassName} {...props}>
        {content}
      </LinkPreview>
    );
  }

  return (
    <div className={combinedClassName} {...props}>
      {content}
    </div>
  );
}

export function LogoCloud({ className, ...props }: React.ComponentProps<"div">) {
  const logos: Logo[] = [
    { src: "https://cdn.brandfetch.io/idxAg10C0L/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Stripe Logo", previewUrl: "https://stripe.com" },
    { src: "https://cdn.brandfetch.io/idwDWo4ONQ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Coinbase Logo", previewUrl: "https://coinbase.com" },
    { src: "https://cdn.brandfetch.io/id4NSNrRnG/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Deel Logo", previewUrl: "https://www.deel.com/" },
    { src: "https://cdn.brandfetch.io/idyS3r5vpr/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Rippling Logo", previewUrl: "https://www.rippling.com/" },
    { src: "https://cdn.brandfetch.io/idxLNTSrGB/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Flexport Logo", previewUrl: "https://www.flexport.com/" },
    { src: "https://cdn.brandfetch.io/idLdViRnHy/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Scale AI Logo", previewUrl: "https://scale.com/" },
    { src: "https://cdn.brandfetch.io/idu49Dl4i8/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Brex Logo", previewUrl: "https://www.brex.com/" },
    { src: "https://cdn.brandfetch.io/idAkkC1hF-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Gusto Logo", previewUrl: "https://gusto.com/" },
    { src: "https://cdn.brandfetch.io/idKhWTXUYD/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Y Combinator Logo", previewUrl: "https://ycombinator.com" },
    { src: "https://cdn.brandfetch.io/idkuvXnjOH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Airbnb Logo", previewUrl: "https://www.airbnb.com/" },
    { src: "https://cdn.brandfetch.io/idrVhdDocf/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "DoorDash Logo", previewUrl: "https://www.doordash.com/" },
    { src: "https://cdn.brandfetch.io/idVyDKR7Xk/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", alt: "Instacart Logo", previewUrl: "https://www.instacart.com/" }
  ];

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      {/* Row 1 */}
      <LogoCard
        className="relative border-r border-b bg-secondary dark:bg-secondary/30"
        logo={logos[0]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>
      <LogoCard className="border-b md:border-r" logo={logos[1]} />
      <LogoCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={logos[2]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
          strokeWidth={1}
        />
      </LogoCard>
      <LogoCard
        className="relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={logos[3]}
      />

      {/* Row 2 */}
      <LogoCard
        className="relative border-r border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={logos[4]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>
      <LogoCard
        className="border-b bg-background md:border-r md:bg-secondary dark:md:bg-secondary/30"
        logo={logos[5]}
      />
      <LogoCard className="border-r border-b" logo={logos[6]}>
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>
      <LogoCard className="border-b bg-secondary dark:bg-secondary/30" logo={logos[7]} />
      
      {/* Row 3 */}
      <LogoCard className="relative border-r bg-secondary dark:bg-secondary/30" logo={logos[8]}>
        <PlusIcon
          className="-right-[12.5px] -top-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>
      <LogoCard className="md:border-r" logo={logos[9]} />
      <LogoCard
        className="relative border-r md:bg-secondary dark:md:bg-secondary/30"
        logo={logos[10]}
      >
        <PlusIcon
          className="-right-[12.5px] -top-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
        <PlusIcon
          className="-top-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
          strokeWidth={1}
        />
      </LogoCard>
      <LogoCard
        className="relative bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={logos[11]}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}
