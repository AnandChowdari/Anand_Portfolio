const GradientMesh = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes meshBlob1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          25% { transform: translate(30%, -20%) scale(1.1); }
          50% { transform: translate(-10%, 30%) scale(0.9); }
          75% { transform: translate(20%, 10%) scale(1.05); }
        }
        @keyframes meshBlob2 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          25% { transform: translate(-25%, 15%) scale(1.15); }
          50% { transform: translate(20%, -25%) scale(0.95); }
          75% { transform: translate(-15%, -10%) scale(1.1); }
        }
        @keyframes meshBlob3 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          33% { transform: translate(15%, 25%) scale(1.1); }
          66% { transform: translate(-20%, -15%) scale(0.9); }
        }
      `}</style>
      
      {/* Primary purple blob */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(142, 41, 221, 0.6) 0%, transparent 70%)',
          top: '10%',
          left: '20%',
          animation: 'meshBlob1 15s ease-in-out infinite',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Secondary violet blob */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(155, 135, 245, 0.5) 0%, transparent 70%)',
          top: '30%',
          right: '15%',
          animation: 'meshBlob2 20s ease-in-out infinite',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Dark indigo blob */}
      <div 
        className="absolute w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(88, 28, 135, 0.5) 0%, transparent 70%)',
          bottom: '0%',
          left: '40%',
          animation: 'meshBlob3 18s ease-in-out infinite',
          filter: 'blur(120px)',
        }}
      />
    </div>
  );
};

export default GradientMesh;
